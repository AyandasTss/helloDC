import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  closeNews(){
    this.modalCtrl.dismiss();
  }



  ngOnInit() {}

}
