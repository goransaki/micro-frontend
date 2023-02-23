import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { OrderRoutingModule } from './order.routing.module';
import { NgxCommonUiLibModule } from 'ngx-common-ui-lib';



@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgxCommonUiLibModule
  ]
})
export class OrderPageModule { }
