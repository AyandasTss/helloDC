import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComplainPage } from './view-complain.page';

const routes: Routes = [
  {
    path: '',
    component: ViewComplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewComplainPageRoutingModule {}
