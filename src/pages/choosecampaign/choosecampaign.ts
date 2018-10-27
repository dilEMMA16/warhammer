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

    let campaign:any;
    let name = chosenCampaign;
    let mission1:any;
    let mission2:any;
    let mission3:any;
    let mission4:any;
    let mission5:any;
    let missions= new Array();

    if (name.includes("Byzant")) {
      let description = "Hired as bodyguards your xenos warband is instructed by your new employer to keep his seat of power. The planetary governor Julian Conscord would have never thought of hiring xenos mercenaries to keep the peace. Since the opening of the Great Rift and the subsequent loss of supplies and troops from Consord’s ties in Terra, he has little option left to keep his loose hold on the planet together.";
      let objective = "protect the planetary governor and escort him to his safe escape onboard his Planetary Defence Force transport";
      let specialRules = "Ambush- Enemies to the player come onto the map using the following mechanic. Roll a D6. On a 1 the unit comes onto the table edge more than 9” from the player units. On a 2 or 3 unit can be placed on any piece of terrain more than 9” from player models. If no such terrain exists this roll acts as a roll of 1. On a 4 or 5 place the unit anywhere on the board more than 9” from player models. On a 6 place the unit anywhere on the board more than D6” from player models.";
      let allies = "Julian Conscord- Use Astra Militarum Company Commander rules.";
      let enemies = "Rebels- Use Astra Militarum infantry, special weapons, and heavy weapons squad rules.Roving mobs- Use Astra Militarum conscript rules. Rooftop snipers- Use Astra Militarum rattling rules. Hired gun- Use Officio Assassinorum rules (Limit 1 per player)";
      mission1 = {name:"Mission 1",description:description,objective:objective,specialRules:specialRules,allies:allies,enemies:enemies};
      mission2 = {name:"Mission 2",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission3 = {name:"Mission 3",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission4 = {name:"Mission 4",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission5 = {name:"Mission 5",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      console.log (mission1);
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions};
      console.log(campaign);
    }
    else if (name.includes("Snuffalufagus")) {
      mission1 =  {name:"Mission 1",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission2 = {name:"Mission 2",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission3 = {name:"Mission 3",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission4 = {name:"Mission 4",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission5 = {name:"Mission 5",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions};
    }
    else if (name.includes("Mibitties")) {
      mission1 =  {name:"Mission 1",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission2 = {name:"Mission 2",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission3 = {name:"Mission 3",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission4 = {name:"Mission 4",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission5 = {name:"Mission 5",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions};
    }
    else if (name.includes("Fuxcellent")) {
      mission1 =  {name:"Mission 1",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission2 = {name:"Mission 2",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission3 = {name:"Mission 3",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission4 = {name:"Mission 4",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission5 = {name:"Mission 5",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions};
    }
    else if (name.includes("Phussi")) {
      mission1 =  {name:"Mission 1",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission2 = {name:"Mission 2",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission3 = {name:"Mission 3",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission4 = {name:"Mission 4",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      mission5 = {name:"Mission 5",description:"",objective:"",specialRules:"",allies:"",enemies:""};
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions};
    }


    this.navCtrl.push(CampaignPage, {
         'campaign' : campaign
       });
  }

}
