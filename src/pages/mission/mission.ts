import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html'
})
export class MissionPage {
  mission: any;
  name: any;
  description: any;
  objective: any;
  specialRules: any;
  allies: any;
  enemies: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mission = navParams.get('mission');
    this.name = this.mission.name;
    this.description = this.mission.description;
    this.objective = this.mission.objective;
    this.specialRules = this.mission.specialRules;
    this.allies = this.mission.allies;
    this.enemies = this.mission.enemies;
  }



}
