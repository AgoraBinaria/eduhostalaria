import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminOrganizationComponent, AdminUsersComponent, AdminBookingsComponent, AdminPaymentsComponent]
})
export class AdminModule { }