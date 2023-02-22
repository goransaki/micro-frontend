import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePageModule } from './modules/table/table-page.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), TablePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
