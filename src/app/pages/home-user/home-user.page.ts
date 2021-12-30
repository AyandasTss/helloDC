import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommentModalComponent } from 'src/app/comment-modal/comment-modal.component';
import { ComplainStatusComponent } from 'src/app/complain-status/complain-status.component';
import { CreateModalComponent } from 'src/app/create-modal/create-modal.component';
import { PictureViewComponent } from 'src/app/picture-view/picture-view.component';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {


  postCard=[
    {
      title: 'electricity Issue',
      date: '12-Dec-2021',
      userimg:'https://pbs.twimg.com/profile_images/1441042657258590217/HISn_-IH_400x400.jpg',
      details: 'Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters.',
      imgUrl: 'https://www.theindianwire.com/wp-content/uploads/2014/04/no-power-1200x1047.jpg',

    },
    {
      title: 'Transport Issue',
      date: '12-Aug-2021',
      userimg:'https://pbs.twimg.com/profile_images/1441042657258590217/HISn_-IH_400x400.jpg',
      details: 'Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters.',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebJhFzPlhwjUDBaeF4eX97tO-jx_stBpmdw&usqp=CAU',

    },
    {
      title: 'Water Issue',
      date: '12-Apr-2021',
      userimg:'https://pbs.twimg.com/profile_images/1441042657258590217/HISn_-IH_400x400.jpg',
      details: 'Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters.',
      imgUrl: 'https://www.financialexpress.com/wp-content/uploads/2021/04/drinking-water-survey.jpg',

    },
  ]

  constructor( private modalCtrl:ModalController) { }

  async openModal(){
    const modal= await this.modalCtrl.create({
      component: CreateModalComponent,
      componentProps: {
        postCardArr: this.postCard
      }
    });

    await modal.present();
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

  async complainStatus(){
    const complainStatus= await this.modalCtrl.create({
      component: ComplainStatusComponent,
      
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),

    });
    await complainStatus.present();
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

  ngOnInit() {
  }

}
