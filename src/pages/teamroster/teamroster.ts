import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teamroster',
  templateUrl: 'teamroster.html'
})
export class TeamRosterPage {

  codex: any;
  leaders : any;
  members: any;
  monsters: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codex = navParams.get('codex');
    this.leaders = navParams.get('leaders');
    this.members = navParams.get('members');
    this.monsters = navParams.get('monsters');
  }


}
