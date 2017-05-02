import { Component } from '@angular/core';
import { Location } from '../location/location';
import { MyDetails } from '../my-details/my-details';
import { CampDetails } from '../camp-details/camp-details';
import { QuickListsHomePage } from '../quicklistshome/quicklistshome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root:any = Location;
  tab2Root:any = MyDetails;
  tab3Root:any = CampDetails;
  tab4Root:any = QuickListsHomePage;
  constructor() {

  }

}
