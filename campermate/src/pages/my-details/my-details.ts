import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../../providers/data';

/**
 * Generated class for the MyDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-details',
  templateUrl: 'my-details.html',
})
export class MyDetails {
  
  myDetailsForm:FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, 
  public dataService:Data, public platform:Platform) {
    this.myDetailsForm = formBuilder.group({
      carRegistration : [''],
      trailerRegistration:[''],
      trailerDimensions : [''],
      phoneNumber : [''],
      notes : ['']
    })  
  }

  ionViewDidLoad() {
    this.platform.ready().then(()=>{
      this.dataService.getMyDetails().then((details) => {
        let savedDetails:any = false;
        if( details && typeof(details) != "undefined"){
          savedDetails = JSON.parse(details);
        }
        let formControl:any = this.myDetailsForm.controls;
        if( savedDetails ){
          formControl.carRegistration.setValue(savedDetails.carRegistration);
          formControl.trailerRegistration.setValue(savedDetails.trailerRegistration);
          formControl.trailerDimensions.setValue(savedDetails.trailerDimensions);
          formControl.phoneNumber.setValue(savedDetails.phoneNumber);
          formControl.notes.setValue(savedDetails.notes);
        }
      });
    });
  }

  saveForm():void{
    let data = this.myDetailsForm.value;
    this.dataService.setMyDetails(data);
  }

}
