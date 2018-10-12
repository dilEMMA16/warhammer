import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseTeamPage} from "../chooseteam/chooseteam";

@Component({
  selector: 'page-codex',
  templateUrl: 'codex.html'
})
export class CodexPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToChooseTeamPage(codex): void {

    var leaders:string[];
    var members:string[];
    var monsters:string[];

    //DO FOR ALL CODEXES INCLUDED = DAVID HELP
    if (codex.includes("space marines")) {
      codex = "Space Marines";
      leaders = ["Serg. Something","Master You","Goddess","Navy","NDSU","Time"];
      members = ["rat","corgi","cat"];
      monsters = ["work", "school", "alarms"];
    }


    this.navCtrl.push(ChooseTeamPage, {
         'codex' : codex,
         'leaders' : leaders,
          'members' : members,
          'monsters' : monsters
       });



  }

}
