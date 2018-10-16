import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { SaveGameProvider } from './../../providers/save-game/save-game';

@Component({
  selector: 'page-teamroster',
  templateUrl: 'teamroster.html'
})
export class TeamRosterPage {


  chosenCharacters: any;
  //progress:any;
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
  abilityToAdd: any;
  gameName: any;
  abilities1: any[];
  abilities2: any[];
  abilities3: any[];
  abilities4: any[];
  abilities5: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public saveGameProvider: SaveGameProvider) {
    this.chosenCharacters = navParams.get('chosenCharacters');
    //this.progress = 0;
    this.progress1 = navParams.get('progress1');
    this.progress2 = navParams.get('progress2');
    this.progress3 = navParams.get('progress3');
    this.progress4 = navParams.get('progress4');
    this.progress5 = navParams.get('progress5');
    this.character1 = this.chosenCharacters[0];
    this.character2 = this.chosenCharacters[1];
    this.character3 = this.chosenCharacters[2];
    this.character4 = this.chosenCharacters[3];
    this.character5 = this.chosenCharacters[4];
    this.abilityToAdd = "";
    this.gameName= "";
    this.abilities1 = navParams.get('abilities1');
    this.abilities2 = navParams.get('abilities2');
    this.abilities3 = navParams.get('abilities3');
    this.abilities4 = navParams.get('abilities4');
    this.abilities5 = navParams.get('abilities5');
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

  addAbility(character) {

    if (character == 1){
      this.abilities1.push(this.abilityToAdd);
    }
    else if (character == 2) {
      this.abilities2.push(this.abilityToAdd);
    }
    else if (character == 3) {
      this.abilities3.push(this.abilityToAdd);
    }
    else if (character == 4) {
      this.abilities4.push(this.abilityToAdd);
      console.log(this.abilities4);
    }
    else if (character == 5) {
      this.abilities5.push(this.abilityToAdd);
    }

    this.abilityToAdd = "";

  }

  triggerSaveGame() {

    let element: HTMLElement = document.getElementById("saveGameCard");
      element.style.display = "block";

  }

  saveGame() {
    this.saveGameProvider.saveGame(this.gameName,this.character1,this.character2,this.character3,this.character4,this.character5,this.progress1,this.progress2,this.progress3,this.progress4,this.progress5,this.abilities1,this.abilities2,this.abilities3,this.abilities4,this.abilities5);
  }


}
