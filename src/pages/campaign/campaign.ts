import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodexPage} from "../codex/codex";

@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html'
})
export class CampaignPage {

  constructor(public navCtrl: NavController) {

  }

  codex() {
    this.navCtrl.setRoot(CodexPage);
  }

}
