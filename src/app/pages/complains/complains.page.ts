import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommentModalComponent } from 'src/app/comment-modal/comment-modal.component';
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

  async commentModal(){
    const comments= await this.modalCtrl.create({
      component: CommentModalComponent,
      swipeToClose: true,
      initialBreakpoint: 1,
      breakpoints: [0,1],
      cssClass:'commentModal',
      presentingElement: await this.modalCtrl.getTop()
    });
    await comments.present();
  }

  ngOnInit() {
  }

}
