import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SchemaService } from 'app/tools/components/schema.service';
import { IFormSchema, IWidgetSchema } from 'app/tools/schema.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrganizationService {
  private organizationsUrl = 'home/organizations';
  constructor(private http: HttpClient, private schemaService: SchemaService) {
  }
  getOrganizationBySlug(slug) {
    return this.http
      .get<IOrganization>(`${this.organizationsUrl}/${slug}`)
  }

  getEventsByOrganizationId(id) {
    return this.http.get(`${this.organizationsUrl}/${id}/events`);
  }

  getSchemaValues(form: IFormSchema, target: any) {
    return this.schemaService.populateDefaultValues(form, target)
  }
}

export interface IOrganization {
  _id?: string;
  slug: string;
  name: string;
  slogan: string;
  email: string;
  phone: string;
  url: string;
  address: any;
  city: string;
  description: string;
  image: string;
  standardPrice: string;
  reducedPrice: string;
}

export interface IEvent {
  _id?: string;
  name: string;
  date: string;
  time: string;
  shift: string;
  description: string;
}
