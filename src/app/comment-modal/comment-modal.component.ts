import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
})
export class CommentModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  dismissComment(){
    this.modalCtrl.dismiss();

  }

  ngOnInit() {}

}
