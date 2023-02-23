import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DetailsPageComponent} from './pages/details-page/details-page.component';

const routes: Routes = [
  {path: ':id', component: DetailsPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DetailsRoutingModule {
}
