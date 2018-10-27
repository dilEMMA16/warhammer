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
  mainColor: any;
  fontColor: any;
  class: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.campaign = navParams.get('campaign');
    this.missions = this.campaign.missions;
    this.name = this.campaign.name;
    this.mainColor = this.campaign.mainColor;
    this.fontColor = this.campaign.fontColor;
    this.class = this.campaign.class;
    // let x  = document.getElementsByClassName(this.name);
    // var i;
    // for (i = 0; i < x.length; i++) {
    //     (x[i] as HTMLElement).style.color = this.fontColor;
    //     (x[i] as HTMLElement).style.backgroundColor = this.mainColor;
    // }
  }


  selectMission(index) {
    let selectedMission = this.missions[index];

    this.navCtrl.push(MissionPage, {
         'mission' : selectedMission
       });
  }



}
