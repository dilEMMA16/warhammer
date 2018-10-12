import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodexPage } from '../pages/codex/codex';
import { RolePage } from '../pages/role/role';
import { ChooseTeamPage } from '../pages/chooseteam/chooseteam';
import { TeamRosterPage } from '../pages/teamroster/teamroster';
import { ChooseCampaignPage } from '../pages/choosecampaign/choosecampaign';
import { CampaignPage } from '../pages/campaign/campaign';
import { MissionPage } from '../pages/mission/mission';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Codex', component: CodexPage },
      { title: 'Role', component: RolePage },
      { title: 'Choose Team', component: ChooseTeamPage },
      { title: 'Team Roster', component: TeamRosterPage },
      { title: 'Choose Campaign', component: ChooseCampaignPage },
      { title: 'Campaign', component: CampaignPage },
      { title: 'Mission', component: MissionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
