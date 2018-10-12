import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodexPage} from "../codex/codex";

@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html'
})
export class MissionPage {

  constructor(public navCtrl: NavController) {

  }

  codex() {
    this.navCtrl.setRoot(CodexPage);
  }

}
