import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCtrl:ModalController) {}
  async openModal(){
    const modal= await this.modalCtrl.create({
      component: CreateModalComponent
    });

    await modal.present();
  }
  async openNews(){
    const news= await this.modalCtrl.create({
      component: LatestNewsComponent,
      swipeToClose:true,
    });
    await news.present();
  }

}
