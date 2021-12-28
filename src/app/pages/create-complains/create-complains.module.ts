import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateComplainsPageRoutingModule } from './create-complains-routing.module';

import { CreateComplainsPage } from './create-complains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateComplainsPageRoutingModule
  ],
  declarations: [CreateComplainsPage]
})
export class CreateComplainsPageModule {}
