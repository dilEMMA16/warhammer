import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodexPage} from "../codex/codex";
import { ChooseCampaignPage} from "../choosecampaign/choosecampaign";


@Component({
  selector: 'page-role',
  templateUrl: 'role.html'
})
export class RolePage {

  constructor(public navCtrl: NavController) {

  }
  codex() {
    this.navCtrl.setRoot(CodexPage);
  }
  choosecampaign() {
    this.navCtrl.setRoot(ChooseCampaignPage);
  }

}
