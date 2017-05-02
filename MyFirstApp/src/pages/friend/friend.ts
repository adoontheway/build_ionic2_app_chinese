import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Friend page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class Friend {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Friend');
  }
  getItems(){
    return [
      {"name":"Joshua1", "description":"no comments"},
       {"name":"Joshua2", "description":"no comments"},
        {"name":"Joshua3", "description":"no comments"},
         {"name":"Joshua4", "description":"no comments"},
          {"name":"Joshua5", "description":"no comments"},
           {"name":"Joshua6", "description":"no comments"}
    ]
  }
}
