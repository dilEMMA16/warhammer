import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { MissionPage} from "../mission/mission";

@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html'
})
export class CampaignPage {

  campaign: any;
  missions: any;
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.campaign = navParams.get('campaign');
    this.missions = this.campaign.missions;
    this.name = this.campaign.name;
  }


  selectMission(index) {
    let selectedMission = this.missions[index];

    this.navCtrl.push(MissionPage, {
         'mission' : selectedMission
       });
  }



}
