import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignPage} from "../campaign/campaign";
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-choosecampaign',
  templateUrl: 'choosecampaign.html'
})
export class ChooseCampaignPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCampaign(chosenCampaign): void {

    var campaign:string[];

    //DO FOR ALL CODEXES INCLUDED = DAVID HELP
    // if (campaign.includes("")) {
      campaign = chosenCampaign;
      let mission1 = "Mission 1";
      let mission2 = "Mission 2";
      let mission3 = "Mission 3";
    //}


    this.navCtrl.push(CampaignPage, {
         'campaign' : campaign,
         'mission1' : mission1,
         'mission2' : mission2,
         'mission3' : mission3
       });
  }

}
