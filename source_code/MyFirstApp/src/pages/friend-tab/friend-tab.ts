import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Friend} from '../friend/friend';
import { BlackList} from '../black-list/black-list';
import { Stranger} from '../stranger/stranger';

/**
 * Generated class for the FriendTab tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-friend-tab',
  templateUrl: 'friend-tab.html'
})
@IonicPage()
export class FriendTab {

  tab1Root: any = Friend;
  tab2Root: any = Stranger;
  tab3Root: any = BlackList;

  constructor(public navCtrl: NavController) {}

}
