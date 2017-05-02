import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../../providers/data';

/**
 * Generated class for the CampDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html',
})
export class CampDetails {

  campDetailsForm:FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
  public dataService:Data,public platform:Platform) {
    this.campDetailsForm = formBuilder.group({
      gateAccessCode : ['', Validators.required],
      ammenitiesCode : [''],
      wifiPassword: [''],
      phoneNumber : [''],
      departure : [''],
      notes : ['']
    }) ;
  }

  ionViewDidLoad() {
    this.platform.ready().then(()=>{
      this.dataService.getCampDetails().then((details)=>{
        let savedDetails:any = false;
        if( details && typeof(details) != "undefined"){
          savedDetails = JSON.parse(details);
        }
        let formControls:any = this.campDetailsForm.controls;

        if( savedDetails){
          formControls.gateAccessCode.setValue(savedDetails.gateAccessCode);
          formControls.ammenitiesCode.setValue(savedDetails.ammenitiesCode);
          formControls.wifiPassword.setValue(savedDetails.wifiPassword);
          formControls.phoneNumber.setValue(savedDetails.phoneNumber);
          formControls.departure.setValue(savedDetails.departure);
          formControls.notes.setValue(savedDetails.notes);
        }
      });
    });
  }

  saveForm():void{
    let data = this.campDetailsForm.value;
    this.dataService.setCampDetails(data);
  }
}
