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
  showeveryone = true;
  showlater=false;
  showstarred=false;
  people = [
    {name: 'Susan Li', message: "I just sent the PDF and message", time: "3:49PM", read: false, later: false, starred: false},
    {name: 'Charles Yi', message: "When you have time can you ch", time: "2:17PM", read: false, later: false, starred: false},
    {name: 'DuKe Du', message: "Ni shang zhe ge wang zhan shi s", time: "9:06AM", read: false, later: false, starred: false},
    {name: 'Qew Bacca', message: "Hey Tracy! I'll be coming into the ", time: "8:33PM", read: false, later: false, starred: false},
  ]

  toggleStatus(person) {
    person.read =! person.read
  }
  toggleStar(person) {
    person.starred =! person.starred
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
