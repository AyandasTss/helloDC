import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComplainStatusComponent } from 'src/app/complain-status/complain-status.component';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.page.html',
  styleUrls: ['./complains.page.scss'],
})
export class ComplainsPage implements OnInit {
  

  constructor(private modalCtrl: ModalController) { }

  
  async complainStatus(){
    const complainStatus= await this.modalCtrl.create({
      component: ComplainStatusComponent,
      
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),

    });
    await complainStatus.present();
  }

  ngOnInit() {
  }

}
