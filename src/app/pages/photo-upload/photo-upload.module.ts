import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoUploadPageRoutingModule } from './photo-upload-routing.module';

import { PhotoUploadPage } from './photo-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoUploadPageRoutingModule,
    ReactiveFormsModule,//Add if needed 
  ],
  declarations: [PhotoUploadPage]
})
export class PhotoUploadPageModule {}
