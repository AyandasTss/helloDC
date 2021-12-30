import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PictureViewComponent } from '../picture-view/picture-view.component';

@Component({
  selector: 'app-complain-status',
  templateUrl: './complain-status.component.html',
  styleUrls: ['./complain-status.component.scss'],
})
export class ComplainStatusComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  closeComplainStatus(){
    this.modalCtrl.dismiss();

  }

  async picturePreview(){
    const picturePreview= await this.modalCtrl.create({
      component: PictureViewComponent,
      initialBreakpoint: 1,
      breakpoints: [0,1],
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop()

    });
    await picturePreview.present();
  }

  ngOnInit() {}

}
