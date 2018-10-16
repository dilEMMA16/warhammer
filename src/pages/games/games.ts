import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamRosterPage} from "../teamroster/teamroster";
import { CodexPage} from "../codex/codex";
import { SaveGameProvider } from './../../providers/save-game/save-game';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  savedGames: any;

  constructor(public navCtrl: NavController,public saveGameProvider: SaveGameProvider) {
    this.saveGameProvider.getAllSavedGames().then(result => {
      console.log("local storage for games " + result);
      this.savedGames = result;
    });
    console.log(this.savedGames);
  }

  codex() {
    this.navCtrl.setRoot(CodexPage);
  }

  deleteGame(game,index) {
    this.saveGameProvider.deleteGame(index,game.gameName,game.character1,game.character2,game.character3,game.character4,game.character5,game.experience1,game.experience2,game.experience3,game.experience4,game.experience5,game.abilities1,game.abilities2,game.abilities3,game.abilities4,game.abilities5);
    //this.navCtrl.setRoot(GamesPage);
  }

  navigateToTeamRosterPage(game) {
    let chosenCharacters = new Array();
    chosenCharacters.push(game.character1);
    chosenCharacters.push(game.character2);
    chosenCharacters.push(game.character3);
    chosenCharacters.push(game.character4);
    chosenCharacters.push(game.character5);

    this.navCtrl.push(TeamRosterPage, {
         'chosenCharacters' : chosenCharacters,
         'progress1' : game.experience1,
         'progress2' : game.experience2,
         'progress3' : game.experience3,
         'progress4' : game.experience4,
         'progress5' : game.experience5,
         'abilities1' : game.abilities1,
         'abilities2' : game.abilities2,
         'abilities3' : game.abilities3,
         'abilities4' : game.abilities4,
         'abilities5' : game.abilities5
       });
  }



}
