import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseTeamPage} from "../chooseteam/chooseteam";

@Component({
  selector: 'page-codex',
  templateUrl: 'codex.html'
})
export class CodexPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToChooseTeamPage(codex): void {

    var leaders:string[];
    var members:string[];
    var monsters:string[];

    //DO FOR ALL CODEXES INCLUDED = DAVID HELP
    if (codex.includes("harlequins")) {
      codex = "Harlequins";
      leaders = ["Shadowseer","Troupe Master"];
      members = ["Troupe","Death Jester","Solitaire"];
      monsters = ["Skyweaver", "Starweaver", "Voidweaver"];
    }
    else if (codex.includes("drukhari")) {
      codex = "Drukhari";
      leaders = ["Haemonculus","Succubus","Archon","Beastmaster","Lhamaean"];
      members = ["Incubi","Mandrake","Wyche","Sslyth","Wrack","Kabalite Warrior","Scourge","Hellion","Khymerae","Razorwing Flock","Medusae","Ur-Ghul"];
      monsters = ["Talos", "Reaver", "Cronos","Clawed Fiend","Grotesque"];
    }
    else if (codex.includes("genestealer")) {
      codex = "Genestealer Cult";
      leaders = ["Primus","Magus","Abominant"];
      members = ["Acolyte","Neophyte","Metamorphs","Iconward","Purestrain Genestealer","Abberant"];
      monsters = ["Armoured Sentinel", "Scout Sentinel", "Patriarch"];
    }
    else if (codex.includes("tyranid")) {
      codex = "Tyranids";
      leaders = ["Warrior Prime","Malanthrope","Ravener Prime"];
      members = ["Zoandthrope","Tyranid Warrior","Ravener","Genestealer","Hormagaunt","Gargoyle","Termagant","Hive Guard","Tyrant Guard","Ripper Swarms","Slasher Swarm"];
      monsters = ["Lictor", "Pyrovore", "Biovore","Carnifex","Venomthrope"];
    }
    else if (codex.includes("eldar")) {
      codex = "Eldar";
      leaders = ["Warlock","Farseer","Spiritseer","Shadow Spectres Exarch"];
      members = ["Ranger","Banshee","Windrider","Dark Reaper","Swooping Hawk","Striking Scorpion","Warp Spider","Fire Dragon","Black Guardian","Dire Avenger","Guardian","Shadow Spectres Aspect Warrior","Corsair"];
      monsters = ["Shining Spear", "Vyper", "Wraithblade","Wraithguard","War Walker","Wasp Assault Walker"];
    }
    else if (codex.includes("necron")) {
      codex = "Necrons";
      leaders = ["Cryptek","Overlord","Lord","Destroyer Lord"];
      members = ["Lychguard","Immortal","Praetorian","Deathmark","Necron Warrior","Scarabs","Destroyer","Heavy Destroyer","Flayed Ones"];
      monsters = ["Tomb Blade", "Wraith", "Canoptek Spyder","Canoptek Acanthrites"];
    }
    else if (codex.includes("ork")) {
      codex = "Orks";
      leaders = ["Big Mek","Painboy","Weirdboy","Mek","Warboss"];
      members = ["Meganobz","Warbiker","Flash Git","Ork Boy","Tankbusta","Ork Kommando","Stormboy","Loota","Nob","Burna","Gretchins"];
      monsters = ["Killa Kan", "DeffKopta", "Warbuggy","Wartrakk","Grot Tank"];
    }
    else if (codex.includes("tau")) {
      codex = "T'au Empire";
      leaders = ["Marksman","Cadre Fireblade","Ethereal","Kroot Shaper"];
      members = ["Pathfinder","Fire Warrior","Breacher","Vespid","Kroot Carnivore","Stealth Battlesuit","Kroot Hound","Drones (x2)"];
      monsters = ["Krootox Rider", "Crisis Battlesuit", "Broadside","Pathfinder Tetras","Hazard Suit","Piranha"];
    }


    this.navCtrl.push(ChooseTeamPage, {
         'codex' : codex,
         'leaders' : leaders,
          'members' : members,
          'monsters' : monsters
       });



  }

}
