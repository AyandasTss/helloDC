import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.scss'],
})
export class PictureViewComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  closePicturePreview(){
    this.modalCtrl.dismiss();

  }
  ngOnInit() {}

}
