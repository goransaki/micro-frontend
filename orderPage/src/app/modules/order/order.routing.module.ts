import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {CarService} from "../../../services/car.service";
import {HttpClientModule} from "@angular/common/http";

const routes: Route[] = [{path: '', component: OrderPageComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    CarService
  ]
})
export class OrderRoutingModule {
}
