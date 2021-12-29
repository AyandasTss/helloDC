import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  ngOnInit() {}

}
