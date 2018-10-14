import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html'
})
export class CampaignPage {

  campaign: any;
  mission1 : any;
  mission2 : any;
  mission3 : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.campaign = navParams.get('campaign');
    this.mission1 = navParams.get('mission1');
    this.mission2 = navParams.get('mission2');
    this.mission3 = navParams.get('mission3');
  }



}
