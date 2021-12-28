import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeKeyboard } from '@awesome-cordova-plugins/native-keyboard/ngx';

// geolocation and native-geocoder
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule],
  providers: [
    Camera,
    Geolocation,
    NativeKeyboard,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
