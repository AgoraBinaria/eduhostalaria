import { MeService } from '../me.service';
import { BusService } from '../../../tools/bus.service';
import { Component, OnInit } from '@angular/core';
import { IWidgetSchema, IReportSchema, IFormSchema } from 'app/tools/schema.model';
import { SchemaService } from 'app/tools/components/schema.service';
import { Level } from 'app/tools/message.model';

@Component({
  selector: 'ab-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  panelSchema: IWidgetSchema = {};
  actionSchema: IWidgetSchema;
  reportSchema: IReportSchema;
  createFormSchema: IFormSchema;
  public cardSchema: IWidgetSchema;
  users: any[];

  constructor(private bus: BusService, private me: MeService, private schema: SchemaService) { }

  ngOnInit() {
    this.schema
      .getSchema$('me_users')
      .subscribe(schemas => {
        this.actionSchema = schemas.actions;
        this.createFormSchema = schemas.create;
        this.reportSchema = schemas.report;
        this.cardSchema = { header: { title: '' }, fields: this.createFormSchema.controls };
        this.filterUsers();
      });
  }

  filterUsers(name?: string, status?: string) {
    this.me
      .getUsers(name, status)
      .subscribe(users => this.users = users);
  }

  onFilter(payload) {
    this.filterUsers(payload.name, payload.status);
  }

  onCreate(data) {
    this.me.inviteUser(data).subscribe(r => this.filterUsers());
  }

  onDelete(data) {
    this.me.removeUserDefinitively(data._id).subscribe(r => {
      this.bus.emit({ level: Level.SUCCESS, text: 'Usuario eliminado con éxito', code: '' });
      this.filterUsers();
    });
  }

  onRowAction(data) {
    switch (data.key) {
      case 'aprobe':
        this.me.approbeUser(data.value).subscribe(r => this.filterUsers());
        this.bus.emit({ level: Level.SUCCESS, text: 'Usuario aprobado con éxito', code: '' });
        break;
      case 'disable':
        this.me.disableUser(data.value).subscribe(r => this.filterUsers());
        this.bus.emit({ level: Level.SUCCESS, text: 'Usuario deshabilitado con éxito', code: '' });
        break;
      case 'resend':
        this.me.reInviteUser(data.value).subscribe(r => {
          this.bus.emit({ level: Level.SUCCESS, text: 'Invitación reenviada con éxito', code: '' });
        });
        break;
    }
  }
}
