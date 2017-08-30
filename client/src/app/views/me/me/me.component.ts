import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/tools/user.model';
import { SecurityService } from 'app/tools/security.service';
import { IWidgetSchema } from 'app/tools/schema.model';
import { BusService } from 'app/tools/bus.service';
import 'rxjs/add/operator/takeWhile';
import { MeService } from 'app/views/me/me.service';
import { SchemaService } from 'app/tools/components/schema.service';
import { IOrganization } from "app/tools/organization.model";


@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  public schema;
  public widgetsSchema: IWidgetSchema[];

  public user: IUser = null;
  public logOutActive: Boolean;
  public changePasswordActive: Boolean;

  public organization: IOrganization = null;

  constructor(
    private security: SecurityService,
    private me: MeService,
    private bus: BusService,
    private schemaService: SchemaService) {
  }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schema == null)
      .subscribe(schema => {
        if (schema && schema.metadata && schema.metadata.name === 'me') {
          this.schema = JSON.parse(JSON.stringify(schema));
          this.getMe();
        }
      });
  }

  getMe() {
    this.security
      .getMe()
      .subscribe(user => {
        if (user) {
          this.user = user;
          this.widgetsSchema = [];
          const userSchema = this.schema.userSchema;
          userSchema.header.title = this.user.name;
          userSchema.header.subtitle = this.user.email;
          this.widgetsSchema.push(userSchema);
          const userRole = this.user.roles[0].toString().toLowerCase();
          const roleSchema = this.schema[userRole];
          this.configureRoleSchemas(userRole, roleSchema);
          this.widgetsSchema = this.widgetsSchema.concat(roleSchema);
        } else {
          this.security.logOutUser();
        }
      });
  }

  configureRoleSchemas(userRole, roleSchema) {
    if (userRole === 'god') {
      this.me.getOrganizationsCount()
        .subscribe(count => roleSchema[0].header.counter = count);
      this.me.getUsersCount()
        .subscribe(count => roleSchema[1].header.counter = count);
    } else if (userRole === 'admin') {
      this.me.getAdministratedOrganization(this.user.organizationId)
        .subscribe(organization => {
          this.organization = organization;
          if (this.organization) {
            roleSchema[0].header.title = this.organization.name;
            roleSchema[0].header.subtitle = this.organization.description;
            // roleSchema[0].actions[0].link = `me/organization/${this.organization.slug}`;
          }
        });
      this.me.getUsersCount()
        .subscribe(count => roleSchema[1].header.counter = count);
    } else if (userRole === 'mestre') {

    } else if (userRole === 'conserje') {

    }
    else {
      this.security.logOutUser();
    }
  }

  onSend(event) {
    if (event.key === 'logout') {
      this.logOutActive = true;
    } else if (event.key === 'change_password') {
      this.changePasswordActive = true;
    }
  }
  onLogOutClick() {
    this.logOutActive = false;
    this.security.logOutUser();
  }
  onChangePasswordClick(changePasswordClaim) {
    this.me.changePassword(changePasswordClaim).subscribe();
    this.changePasswordActive = false;
  }
}
