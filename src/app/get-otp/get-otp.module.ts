import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetOtpPageRoutingModule } from './get-otp-routing.module';

import { GetOtpPage } from './get-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetOtpPageRoutingModule
  ],
  declarations: [GetOtpPage]
})
export class GetOtpPageModule {}
