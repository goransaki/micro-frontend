import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsPageComponent} from './pages/details-page/details-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DetailsRoutingModule} from './details-routing.module';
import {CarService} from "../../../services/car.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    CarService
  ]
})
export class DetailsPageModule {
}
