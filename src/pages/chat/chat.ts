import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  people = [
    {name: 'Susan Li', message: "I just sent the PDF and message to the", time: "3:49PM", status: "unread"},
    {name: 'Charles Yi', message: "When you have time can you check this", time: "2:17PM", status: "unread"},
    {name: 'DuKe Du', message: "Ni shang zhe he wang zhan shi shi wo z", time: "11:53PM", status: "read"},
    {name: 'Qew Bacca', message: "Hey Tracy! I'll be coming into the office", time: "8:33PM", status: "read"}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
