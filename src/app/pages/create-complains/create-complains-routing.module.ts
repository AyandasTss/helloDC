import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComplainsPage } from './create-complains.page';

const routes: Routes = [
  {
    path: '',
    component: CreateComplainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateComplainsPageRoutingModule {}
