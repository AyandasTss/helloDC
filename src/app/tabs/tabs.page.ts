import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateModalComponent } from '../create-modal/create-modal.component';

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

}
