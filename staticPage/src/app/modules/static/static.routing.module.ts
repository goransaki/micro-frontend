import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {StaticPageComponent} from './pages/static-page/static-page.component';
import {CarService} from "../../../services/car.service";
import {HttpClientModule} from "@angular/common/http";

const routes: Route[] = [{path: '', component: StaticPageComponent}]

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
export class StaticRoutingModule {
}
