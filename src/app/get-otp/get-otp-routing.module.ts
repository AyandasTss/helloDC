import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetOtpPage } from './get-otp.page';

const routes: Routes = [
  {
    path: '',
    component: GetOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetOtpPageRoutingModule {}
