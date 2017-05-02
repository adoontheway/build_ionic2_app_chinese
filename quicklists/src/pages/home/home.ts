import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { CheckList } from '../check-list/check-list';
import { CheckListModel } from '../../models/checklist-model';
import { Data } from '../../providers/data';
// import { Keyboard } from 'ionic-native';
import { Keyboard } from 'ionic-angular';
import { Intro } from '../intro/intro';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  checklists:CheckListModel[] = [];
  constructor(public navCtrl: NavController, public dataService:Data, 
    public alertCtrl:AlertController,public platform:Platform, public keyboard:Keyboard,
    public storage:Storage) {

  }

  ionViewDidLoad(){
    this.platform.ready().then(()=>{
      this.storage.get('introShown').then((result) =>{
        if(!result){
          this.storage.set('introShown', true);
          this.navCtrl.setRoot(Intro);
        }
      })

      this.dataService.getData().then((checklists) => {
        let savedChecklists :any = false;
        if( typeof(checklists) != 'undefined'){
          savedChecklists = JSON.parse(checklists)
        }

        if(savedChecklists){
          savedChecklists.forEach((savedChecklist) => {
            let loadChecklist = new CheckListModel(savedChecklist.title, savedChecklist.items,savedChecklist.created);
            this.checklists.push(loadChecklist);
            loadChecklist.checklist.subscribe(update => {
              this.save();
            });
          });
        }
      });
    });
  }

  addChecklist():void{
    let prompt = this.alertCtrl.create({
      title:'New Checklist',
      message : 'Enter the name of your new checklist below:',
      inputs : [
        {
          name:'name'
        }
      ],
      buttons : [
        {
          text:'Cancel'
        },{
          text : 'Save',
          handler : data=>{
            let newChecklist = new CheckListModel(data.name, [], Date.now());
            this.checklists.push(newChecklist);
            newChecklist.checklist.subscribe(update => {
              this.save()
            });
            this.save();
          }
        }
      ]
    });
    prompt.present();
  }

  renameChecklist(checklist):void{
    let prompt = this.alertCtrl.create({
      title : 'Rename Checklist',
      message : 'Enter the new name of this checklist below',
      inputs : [
        {
          name : 'name'
        }
      ],
      buttons : [
        {
          text : 'Cancel'
        },
        {
          text : 'Save',
          handler : data => {
            let index = this.checklists.indexOf(checklist);
            if( index != -1){
              this.checklists[index].setTitle(data.name);
              this.save();
            }
          }
        }
      ]
    });
    prompt.present();
  }

  viewChecklist(checklist):void{
    this.navCtrl.push(CheckList, {
      checklist:checklist
    })
  }

  removeChecklist(checklist):void{
    let index = this.checklists.indexOf(checklist);
    if(index != -1){
      this.checklists.splice(index, 1);
      this.save();
    }
  }

  save():void{
    // Keyboard.close();
    this.keyboard.close();
    this.dataService.save(this.checklists);
  }

}
