import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from 'app/views/me/me/me.component';
import { UsersComponent } from 'app/views/me/users/users.component';
import { OrganizationsComponent } from 'app/views/me/organizations/organizations.component';
import { OrganizationComponent } from 'app/views/me/organization/organization.component';
import { EventsComponent } from 'app/views/me/events/events.component';
import { EventBookingsComponent } from 'app/views/me/event-bookings/event-bookings.component';
import { BookingsComponent } from 'app/views/me/bookings/bookings.component';
import { EventComponent } from 'app/views/me/event/event.component';
import { EventsUshierComponent } from 'app/views/me/events-ushier/events-ushier.component';
import { BookingComponent } from 'app/views/me/booking/booking.component';
import { EventPrintComponent } from './event-print/event-print.component';

const routes: Routes = [
  {
    path: '',
    component: MeComponent,
    data: { name: 'me', title: 'O meu perfil' }
  },
  {
    path: 'confirm/:userId',
    redirectTo: '/login/confirm/:userId',
    data: { name: 'me_confirm', title: 'Confirmar' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { name: 'me_events', title: 'Ofertas' }
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    data: { name: 'me_bookings', title: 'Reservas' }
  },
  {
    path: 'bookings/:bookingId',
    component: BookingComponent,
    data: { name: 'me_booking', title: 'Reserva' }
  },
  {
    path: 'events/new',
    component: EventComponent,
    data: { name: 'me_events_new', title: 'Nova oferta' }
  },
  {
    path: 'events/:id',
    component: EventComponent,
    data: { name: 'me_events_edit', title: 'Editar oferta' }
  },
  {
    path: 'events/:id/print',
    component: EventPrintComponent,
    data: { name: 'me_event_bookings', title: 'Reservas' }
  },
  {
    path: 'events/:slug/bookings',
    component: EventBookingsComponent,
    data: { name: 'me_event_bookings', title: 'Reservas' }
  },
  {
    path: 'events-ushier',
    component: EventsUshierComponent,
    data: { name: 'me_events_ushier', title: 'Asistencia' }
  },
  {
    path: 'organizations',
    component: OrganizationsComponent,
    data: { name: 'me_organizations', title: 'Centros' }
  },
  {
    path: 'organization',
    component: OrganizationComponent,
    data: { name: 'me_organization', title: 'O meu centro' }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { name: 'me_users', title: 'Usuarios' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
