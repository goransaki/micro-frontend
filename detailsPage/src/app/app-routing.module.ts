import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageModule } from './modules/details/details-page.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), DetailsPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
