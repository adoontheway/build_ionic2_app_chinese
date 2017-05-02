import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http,ConnectionBackend } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the AnotherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-another-page',
  templateUrl: 'another-page.html',
  providers : [Http],
})
export class AnotherPage {
  myForm:any;
  constructor(public formBuilder:FormBuilder, public navCtrl: NavController,public view:ViewController, public navParams: NavParams, public http:Http) {
    this.myForm = formBuilder.group({
      field1 : ['', Validators.required],
      field2 : [''],
      field3:['']
    });
    /**
    this.http.get('https://www.redit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        console.log(data);
      });
      */
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotherPage');
  }

  close(){
    this.view.dismiss();
  }

  openPage(){

  }

  saveForm(event){
    event.preventDefault();
    console.log(this.myForm.value);
  }
}