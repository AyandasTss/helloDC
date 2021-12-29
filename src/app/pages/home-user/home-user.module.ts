import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUserPageRoutingModule } from './home-user-routing.module';

import { HomeUserPage } from './home-user.page';
import { FeedCardComponent } from 'src/app/components/feed-card/feed-card.component';

// geolocation and native-geocoder
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { CreateModalComponent } from 'src/app/create-modal/create-modal.component';
import { CommentModalComponent } from 'src/app/comment-modal/comment-modal.component';
import { ComplainStatusComponent } from 'src/app/complain-status/complain-status.component';
// import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUserPageRoutingModule,
  ],
  declarations: [HomeUserPage, FeedCardComponent,CreateModalComponent, CommentModalComponent, ComplainStatusComponent],
  providers: [
    Geolocation,
  ],
  entryComponents: [],

})
export class HomeUserPageModule {}
