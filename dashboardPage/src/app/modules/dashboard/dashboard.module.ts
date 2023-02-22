import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from './components/charts/charts.module';
import { NgxCommonUiLibModule } from 'ngx-common-ui-lib';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    NgxCommonUiLibModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
