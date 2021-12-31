import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplainsPageRoutingModule } from './complains-routing.module';

import { ComplainsPage } from './complains.page';
import { ComplainStatusComponent } from 'src/app/complain-status/complain-status.component';
import { CommentModalComponent } from 'src/app/comment-modal/comment-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplainsPageRoutingModule
  ],
  declarations: [ComplainsPage, ComplainStatusComponent, CommentModalComponent]
})
export class ComplainsPageModule {}
