import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodexPage } from '../pages/codex/codex';
import { RolePage } from '../pages/role/role';
import { ChooseTeamPage } from '../pages/chooseteam/chooseteam';
import { TeamRosterPage } from '../pages/teamroster/teamroster';
import { ChooseCampaignPage } from '../pages/choosecampaign/choosecampaign';
import { CampaignPage } from '../pages/campaign/campaign';
import { MissionPage } from '../pages/mission/mission';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CodexPage,
    RolePage,
    ChooseTeamPage,
    TeamRosterPage,
    ChooseCampaignPage,
    CampaignPage,
    MissionPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CodexPage,
    RolePage,
    ChooseTeamPage,
    TeamRosterPage,
    ChooseCampaignPage,
    CampaignPage,
    MissionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
