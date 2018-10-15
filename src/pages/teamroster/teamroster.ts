import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teamroster',
  templateUrl: 'teamroster.html'
})
export class TeamRosterPage {


  chosenCharacters: any;
  progress:any;
  progress1:any;
  progress2:any;
  progress3:any;
  progress4:any;
  progress5:any;
  character1: any;
  character2: any;
  character3: any;
  character4: any;
  character5: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chosenCharacters = navParams.get('chosenCharacters');
    this.progress = 0;
    this.progress1 = 0;
    this.progress2 = 0;
    this.progress3 = 0;
    this.progress4 = 0;
    this.progress5 = 0;
    this.character1 = this.chosenCharacters[0];
    this.character2 = this.chosenCharacters[1];
    this.character3 = this.chosenCharacters[2];
    this.character4 = this.chosenCharacters[3];
    this.character5 = this.chosenCharacters[4];
  }

  alterExperience(value,character) {
    if (character == 1){
      this.progress1 += value;
      if (this.progress1 < 0) {
        this.progress1 = 0;
      }
      else if (this.progress1 > 750) {
        this.progress1 = 750;
      }
    }
    else if (character == 2) {
      this.progress2 += value;
      if (this.progress2 < 0) {
        this.progress2 = 0;
      }
      else if (this.progress2 > 750) {
        this.progress2 = 750;
      }
    }
    else if (character == 3) {
      this.progress3 += value;
      if (this.progress3 < 0) {
        this.progress3 = 0;
      }
      else if (this.progress3 > 750) {
        this.progress3 = 750;
      }
    }
    else if (character == 4) {
      this.progress4 += value;
      if (this.progress4 < 0) {
        this.progress4 = 0;
      }
      else if (this.progress4 > 750) {
        this.progress4 = 750;
      }
    }
    else if (character == 5) {
      this.progress5 += value;
      if (this.progress5 < 0) {
        this.progress5 = 0;
      }
      else if (this.progress5 > 750) {
        this.progress5 = 750;
      }
    }
  }


}
