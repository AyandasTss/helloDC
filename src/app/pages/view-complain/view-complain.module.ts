import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewComplainPageRoutingModule } from './view-complain-routing.module';

import { ViewComplainPage } from './view-complain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewComplainPageRoutingModule
  ],
  declarations: [ViewComplainPage]
})
export class ViewComplainPageModule {}
