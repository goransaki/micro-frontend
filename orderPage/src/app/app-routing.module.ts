import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageModule } from './modules/order/order-page.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), OrderPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
