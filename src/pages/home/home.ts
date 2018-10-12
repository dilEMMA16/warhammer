import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RolePage} from "../role/role";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  role() {
    this.navCtrl.setRoot(RolePage);
  }

}
