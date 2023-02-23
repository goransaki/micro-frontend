import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {NgxCommonUiLibModule} from 'ngx-common-ui-lib';
import {ReactiveFormsModule} from "@angular/forms";
import {VehicleService} from "../../../services/vehicle.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxCommonUiLibModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    VehicleService
  ]
})
export class DashboardModule {
}
