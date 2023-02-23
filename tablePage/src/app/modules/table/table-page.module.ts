import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablePageComponent} from './pages/table-page/table-page.component';
import {PaginatedTableComponent} from './components/paginated-table/paginated-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {TableRoutingModule} from './table-routing.module';
import {CarService} from "../../../services/car.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PaginatedTableComponent,
    TablePageComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    CarService
  ]
})
export class TablePageModule {
}
