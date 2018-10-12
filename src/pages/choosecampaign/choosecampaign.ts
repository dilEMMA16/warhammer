import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodexPage} from "../codex/codex";

@Component({
  selector: 'page-choosecampaign',
  templateUrl: 'choosecampaign.html'
})
export class ChooseCampaignPage {

  constructor(public navCtrl: NavController) {

  }

  codex() {
    this.navCtrl.setRoot(CodexPage);
  }

}
