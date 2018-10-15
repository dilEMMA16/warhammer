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

    var leaders = new Array();
    var members= new Array();
    var monsters= new Array();

    //DO FOR ALL CODEXES INCLUDED = DAVID HELP
    if (codex.includes("harlequins")) {
      codex = "Harlequins";
      let c1 = {name:"Shadowseer",description:"sees shadows ooooooohhhhh",M:"8 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:3,Ld:9,Sv:"7+"};
      let c2 = {name:"Troupe Master",description:"masterrrr",M:"8 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:5,Ld:9,Sv:"6+"};
      leaders = [c1,c2];
      let c3 = {name:"Troupe",description:"troupe",M:"8 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:4,Ld:8,Sv:"6+"};
      let c4 = {name:"Death Jester",description:"death jester",M:"8 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:4,Ld:9,Sv:"6+"};
      let c5 = {name:"Solitaire",description:"Solitaire",M:"8 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:8,Ld:9,Sv:"6+"};
      members = [c3,c4,c5];
      let c6 = {name:"Skyweaver",description:"Skyweaver",M:"16 in.",WS:"3+",BS:"3+",S:3,T:4,W:4,A:3,Ld:8,Sv:"4+"};
      let c7 = {name:"Starweaver",description:"Starweaver",M:"16 in.",WS:"3+",BS:"3+",S:5,T:5,W:6,A:3,Ld:8,Sv:"4+"};
      let c8 = {name:"Voidweaver",description:"Voidweaver",M:"16 in.",WS:"3+",BS:"3+",S:5,T:5,W:6,A:3,Ld:8,Sv:"4+"};
      monsters = [c6,c7,c8];
    }
    else if (codex.includes("drukhari")) {
      codex = "Drukhari";
      let c1 = {name:"Haemonculus",description:"Haemonculus",M:"7 in.",WS:"2+",BS:"2+",S:3,T:4,W:5,A:5,Ld:8,Sv:"6+"};
      let c2 = {name:"Succubus",description:"Succubus",M:"8 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:4,Ld:8,Sv:"6+"};
      let c3 = {name:"Archon",description:"Archon",M:"8 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:5,Ld:9,Sv:"5+"};
      let c4 = {name:"Beastmaster",description:"Beastmaster",M:"0 in.",WS:"0+",BS:"0+",S:0,T:0,W:0,A:0,Ld:0,Sv:"0+"};
      let c5 = {name:"Lhamaean",description:"Lhamaean",M:"8 in.",WS:"3+",BS:"3+",S:3,T:3,W:3,A:2,Ld:8,Sv:"5+"};
      leaders = [c1,c2,c3,c4,c5];
      let c6 = {name:"Incubi",description:"Incubi",M:"7 in.",WS:"2+",BS:"3+",S:3,T:3,W:2,A:4,Ld:9,Sv:"3+"};
      let c7 = {name:"Mandrake",description:"Mandrake",M:"8 in.",WS:"3+",BS:"3+",S:4,T:3,W:1,A:3,Ld:8,Sv:"7+"};
      let c8 = {name:"Wyche",description:"Wyche",M:"8 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:2,Ld:8,Sv:"6+"};
      let c9 = {name:"Sslyth",description:"Sslyth",M:"8 in.",WS:"3+",BS:"3+",S:5,T:5,W:4,A:3,Ld:2,Sv:"5+"};
      let c10 = {name:"Wrack",description:"Wrack",M:"7 in.",WS:"3+",BS:"3+",S:3,T:4,W:1,A:2,Ld:7,Sv:"6+"};
      let c11 = {name:"Kabalite Warrior",description:"Kabalite Warrior",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:2,Ld:8,Sv:"5+"};
      let c12 = {name:"Scourge",description:"Scourge",M:"14 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:2,Ld:8,Sv:"4+"};
      let c13 = {name:"Hellion",description:"Hellion",M:"14 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:3,Ld:8,Sv:"5+"};
      let c14 = {name:"Khymerae",description:"Khymerae",M:"10 in.",WS:"3+",BS:"-",S:4,T:4,W:1,A:3,Ld:4,Sv:"6+"};
      let c15 = {name:"Razorwing Flock",description:"Razorwing Flock",M:"12 in.",WS:"4+",BS:"-",S:2,T:2,W:4,A:4,Ld:4,Sv:"7+"};
      let c16 = {name:"Medusae",description:"Medusae",M:"8 in.",WS:"3+",BS:"3+",S:3,T:3,W:3,A:1,Ld:8,Sv:"5+"};
      let c17 = {name:"Ur-Ghul",description:"Ur-Ghul",M:"8 in.",WS:"3+",BS:"-",S:4,T:3,W:3,A:4,Ld:2,Sv:"7+"};
      members = [c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17];
      let c18 = {name:"Talos",description:"Talos",M:"8 in.",WS:"3+",BS:"4+",S:6,T:6,W:7,A:4,Ld:8,Sv:"3+"};
      let c19 = {name:"Reaver",description:"Reaver",M:"16 in.",WS:"3+",BS:"3+",S:3,T:4,W:2,A:3,Ld:8,Sv:"4+"};
      let c20 = {name:"Cronos",description:"Cronos",M:"8 in.",WS:"4+",BS:"4+",S:5,T:6,W:7,A:3,Ld:9,Sv:"3+"};
      let c21 = {name:"Clawed Fiend",description:"Clawed Fiend",M:"10 in.",WS:"4+",BS:"-",S:5,T:5,W:4,A:5,Ld:4,Sv:"5+"};
      let c22 = {name:"Grotesque",description:"Grotesque",M:"7 in.",WS:"3+",BS:"6+",S:5,T:5,W:3,A:4,Ld:8,Sv:"6+"};
      monsters = [c18,c19,c20,c21,c22];
    }
    else if (codex.includes("genestealer")) {
      codex = "Genestealer Cult";
      let c1 = {name:"Primus",description:"Primus",M:"6 in.",WS:"2+",BS:"3+",S:4,T:3,W:5,A:4,Ld:9,Sv:"5+"};
      let c2 = {name:"Magus",description:"Magus",M:"6 in.",WS:"3+",BS:"3+",S:3,T:3,W:4,A:3,Ld:8,Sv:"5+"};
      let c3 = {name:"Abominant",description:"Abominant",M:"6 in.",WS:"3+",BS:"6+",S:6,T:5,W:5,A:3,Ld:8,Sv:"5+"};
      leaders = [c1,c2,c3];
      let c4 = {name:"Acolyte",description:"Acolyte",M:"6 in.",WS:"3+",BS:"4+",S:4,T:3,W:1,A:3,Ld:8,Sv:"5+"};
      let c5 = {name:"Neophyte",description:"Neophyte",M:"6 in.",WS:"4+",BS:"4+",S:3,T:3,W:1,A:2,Ld:8,Sv:"5+"};
      let c6 = {name:"Metamorphs",description:"Metamorphs",M:"6 in.",WS:"3+",BS:"4+",S:4,T:3,W:1,A:4,Ld:8,Sv:"5+"};
      let c7 = {name:"Iconward",description:"Iconward",M:"6 in.",WS:"3+",BS:"3+",S:4,T:3,W:4,A:4,Ld:8,Sv:"5+"};
      let c8 = {name:"Purestrain Genestealer",description:"Purestrain Genestealer",M:"8 in.",WS:"3+",BS:"-",S:4,T:4,W:1,A:3,Ld:9,Sv:"5+"};
      let c9 = {name:"Aberrant",description:"Aberrant",M:"6 in.",WS:"3+",BS:"6+",S:5,T:4,W:2,A:2,Ld:7,Sv:"5+"};
      members = [c4,c5,c6,c7,c8,c9];
      let c10 = {name:"Armoured Sentinel",description:"Armoured Sentinel",M:"8 in.",WS:"4+",BS:"4+",S:5,T:5,W:6,A:1,Ld:7,Sv:"3+"};
      let c11 = {name:"Scout Sentinel",description:"Scout Sentinel",M:"9 in.",WS:"4+",BS:"4+",S:5,T:5,W:6,A:1,Ld:7,Sv:"4+"};
      let c12 = {name:"Patriarch",description:"Patriarch",M:"8 in.",WS:"2+",BS:"5+",S:6,T:5,W:6,A:6,Ld:10,Sv:"4+"};
      monsters = [c10,c11,c12];
    }
    else if (codex.includes("tyranid")) {
      codex = "Tyranids";
      let c1 = {name:"Warrior Prime",description:"Warrior Prime",M:"6 in.",WS:"2+",BS:"3+",S:5,T:5,W:6,A:4,Ld:10,Sv:"3+"};
      let c2 = {name:"Ravener Prime",description:"Ravener Prime",M:"12 in.",WS:"2+",BS:"3+",S:5,T:5,W:6,A:4,Ld:10,Sv:"4+"};
      leaders = [c1,c2];
      let c3 = {name:"Zoanthrope",description:"Zoanthrope",M:"5 in.",WS:"4+",BS:"3+",S:4,T:4,W:3,A:1,Ld:9,Sv:"5+"};
      let c4 = {name:"Tyranid Warrior",description:"Tyranid Warrior",M:"6 in.",WS:"3+",BS:"4+",S:4,T:4,W:3,A:3,Ld:9,Sv:"4+"};
      let c5 = {name:"Ravener",description:"Ravener",M:"12 in.",WS:"3+",BS:"4+",S:4,T:4,W:3,A:4,Ld:5,Sv:"5+"};
      let c6 = {name:"Genestealer",description:"Genestealer",M:"8 in.",WS:"3+",BS:"-",S:4,T:4,W:1,A:3,Ld:9,Sv:"5+"};
      let c7 = {name:"Hormagaunt",description:"Hormagaunt",M:"8 in.",WS:"4+",BS:"4+",S:3,T:3,W:1,A:2,Ld:5,Sv:"6+"};
      let c8 = {name:"Gargoyle",description:"Gargoyle",M:"12 in.",WS:"4+",BS:"4+",S:3,T:3,W:1,A:1,Ld:5,Sv:"6+"};
      let c9 = {name:"Termagant",description:"Termagant",M:"6 in.",WS:"4+",BS:"4+",S:3,T:3,W:1,A:1,Ld:5,Sv:"6+"};
      let c10 = {name:"Hive Guard",description:"Hive Guard",M:"5 in.",WS:"4+",BS:"3+",S:4,T:5,W:3,A:2,Ld:7,Sv:"4+"};
      let c11 = {name:"Tyrant Guard",description:"Tyrant Guard",M:"7 in.",WS:"3+",BS:"4+",S:5,T:5,W:3,A:2,Ld:6,Sv:"3+"};
      let c12 = {name:"Ripper Swarms",description:"Ripper Swarms",M:"6 in.",WS:"5+",BS:"5+",S:3,T:3,W:3,A:4,Ld:4,Sv:"6+"};
      let c13 = {name:"Slasher Swarm",description:"Slasher Swarm",M:"12 in.",WS:"5+",BS:"5+",S:3,T:3,W:3,A:4,Ld:4,Sv:"6+"};
      members = [c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13];
      let c14 = {name:"Lictor",description:"Lictor",M:"9 in.",WS:"2+",BS:"4+",S:6,T:4,W:4,A:3,Ld:9,Sv:"5+"};
      let c15 = {name:"Pyrovore",description:"Pyrovore",M:"5 in.",WS:"4+",BS:"4+",S:4,T:4,W:4,A:2,Ld:5,Sv:"4+"};
      let c16 = {name:"Biovore",description:"Biovore",M:"5 in.",WS:"4+",BS:"4+",S:4,T:4,W:4,A:2,Ld:5,Sv:"4+"};
      let c17 = {name:"Carnifex",description:"Carnifex",M:"7 in.",WS:"4+",BS:"4+",S:6,T:7,W:8,A:4,Ld:6,Sv:"3+"};
      let c18 = {name:"Venomthrope",description:"Venomthrope",M:"5 in.",WS:"4+",BS:"4+",S:4,T:4,W:3,A:2,Ld:5,Sv:"5+"};
      monsters = [c14,c15,c16,c17,c18];
    }
    else if (codex.includes("eldar")) {
      codex = "Eldar";
      let c1 = {name:"Warlock",description:"Warlock",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:2,A:2,Ld:8,Sv:"6+"};
      let c2 = {name:"Farseer",description:"Farseer",M:"7 in.",WS:"2+",BS:"2+",S:3,T:3,W:5,A:2,Ld:9,Sv:"6+"};
      let c3 = {name:"Spiritseer",description:"Spiritseer",M:"7 in.",WS:"2+",BS:"2+",S:3,T:3,W:4,A:2,Ld:8,Sv:"6+"};
      leaders = [c1,c2,c3];
      let c4 = {name:"Ranger",description:"Ranger",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:7,Sv:"5+"};
      let c5 = {name:"Banshee",description:"Banshee",M:"8 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:2,Ld:8,Sv:"4+"};
      let c6 = {name:"Windrider",description:"Windrider",M:"16 in.",WS:"3+",BS:"3+",S:3,T:4,W:2,A:1,Ld:7,Sv:"4+"};
      let c7 = {name:"Dark Reaper",description:"Dark Reaper",M:"6 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:8,Sv:"3+"};
      let c8 = {name:"Swooping Hawk",description:"Swooping Hawk",M:"14 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:8,Sv:"4+"};
      let c9 = {name:"Striking Scorpion",description:"Striking Scorpion",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:2,Ld:8,Sv:"3+"};
      let c10 = {name:"Warp Spider",description:"Warp Spider",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:7,Sv:"3+"};
      let c11 = {name:"Fire Dragon",description:"Fire Dragon",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:8,Sv:"3+"};
      let c12 = {name:"Black Guardian",description:"Black Guardian",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:7,Sv:"5+"};
      let c13 = {name:"Dire Avenger",description:"Dire Avenger",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:7,Sv:"4+"};
      let c14 = {name:"Guardian",description:"Guardian",M:"7 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:7,Sv:"5+"};
      let c15 = {name:"Shadow Spectres Aspect Warrior",description:"Shadow Spectres Aspect Warrior",M:"12 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:7,Sv:"5+"};
      let c16 = {name:"Corsair",description:"Corsair",M:"16 in.",WS:"3+",BS:"3+",S:3,T:3,W:1,A:1,Ld:6,Sv:"5+"};
      members = [c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];
      let c17 = {name:"Shining Spear",description:"Shining Spear",M:"16 in.",WS:"3+",BS:"3+",S:3,T:4,W:3,A:3,Ld:8,Sv:"3+"};
      let c18 = {name:"Vyper",description:"Vyper",M:"16 in.",WS:"6+",BS:"3+",S:4,T:5,W:6,A:1,Ld:8,Sv:"3+"};
      let c19 = {name:"Wraithblade",description:"Wraithblade",M:"5 in.",WS:"3+",BS:"3+",S:5,T:5,W:3,A:2,Ld:9,Sv:"3+"};
      let c20 = {name:"Wraithguard",description:"Wraithguard",M:"5 in.",WS:"3+",BS:"3+",S:5,T:5,W:3,A:1,Ld:9,Sv:"3+"};
      let c21 = {name:"War Walker",description:"War Walker",M:"10 in.",WS:"3+",BS:"3+",S:5,T:6,W:6,A:2,Ld:8,Sv:"4+"};
      let c22 = {name:"Wasp Assault Walker",description:"Wasp Assault Walker",M:"10 in.",WS:"3+",BS:"3+",S:5,T:6,W:7,A:2,Ld:8,Sv:"4+"};
      monsters = [c17,c18,c19,c20,c21,c22];
    }
    else if (codex.includes("necron")) {
      codex = "Necrons";
      let c1 = {name:"Cryptek",description:"Cryptek",M:"5 in.",WS:"3+",BS:"3+",S:4,T:4,W:4,A:1,Ld:10,Sv:"4+"};
      let c2 = {name:"Overlord",description:"Overlord",M:"5 in.",WS:"2+",BS:"2+",S:5,T:5,W:5,A:3,Ld:10,Sv:"3+"};
      let c3 = {name:"Lord",description:"Lord",M:"5 in.",WS:"3+",BS:"3+",S:5,T:5,W:4,A:3,Ld:10,Sv:"3+"};
      let c4 = {name:"Destroyer Lord",description:"Destroyer Lord",M:"10 in.",WS:"3+",BS:"3+",S:5,T:6,W:6,A:4,Ld:10,Sv:"3+"};
      leaders = [c1,c2,c3,c4];
      let c5 = {name:"Lychguard",description:"Lychguard",M:"5 in.",WS:"3+",BS:"3+",S:5,T:5,W:2,A:2,Ld:10,Sv:"3+"};
      let c6 = {name:"Immortal",description:"Immortal",M:"5 in.",WS:"3+",BS:"3+",S:4,T:4,W:1,A:1,Ld:10,Sv:"3+"};
      let c7 = {name:"Praetorian",description:"Praetorian",M:"10 in.",WS:"3+",BS:"3+",S:5,T:5,W:2,A:2,Ld:10,Sv:"3+"};
      let c8 = {name:"Deathmark",description:"Deathmark",M:"5 in.",WS:"3+",BS:"3+",S:4,T:4,W:1,A:1,Ld:10,Sv:"3+"};
      let c9 = {name:"Necron Warrior",description:"Necron Warrior",M:"5 in.",WS:"3+",BS:"3+",S:4,T:4,W:1,A:1,Ld:10,Sv:"4+"};
      let c10 = {name:"Scarabs",description:"Scarabs",M:"10 in.",WS:"4+",BS:"-",S:3,T:3,W:3,A:4,Ld:10,Sv:"6+"};
      let c11 = {name:"Destroyer",description:"Destroyer",M:"10 in.",WS:"3+",BS:"3+",S:4,T:5,W:3,A:2,Ld:10,Sv:"3+"};
      let c12 = {name:"Heavy Destroyer",description:"Heavy Destroyer",M:"10 in.",WS:"3+",BS:"3+",S:4,T:5,W:3,A:2,Ld:10,Sv:"3+"};
      let c13 = {name:"Flayed Ones",description:"Flayed Ones",M:"5 in.",WS:"3+",BS:"6+",S:4,T:4,W:1,A:3,Ld:10,Sv:"4+"};
      members = [c5,c6,c7,c8,c9,c10,c11,c12,c13];
      let c14 = {name:"Tomb Blade",description:"Tomb Blade",M:"14 in.",WS:"3+",BS:"3+",S:4,T:5,W:2,A:1,Ld:10,Sv:"4+"};
      let c15 = {name:"Wraith",description:"Wraith",M:"12 in.",WS:"3+",BS:"3+",S:6,T:5,W:3,A:3,Ld:10,Sv:"4+"};
      let c16 = {name:"Canoptek Spyder",description:"Canoptek Spyder",M:"6 in.",WS:"4+",BS:"4+",S:6,T:6,W:4,A:4,Ld:10,Sv:"3+"};
      let c17 = {name:"Canoptek Acanthrites",description:"Canoptek Acanthrites",M:"12 in.",WS:"3+",BS:"3+",S:5,T:5,W:3,A:3,Ld:10,Sv:"3+"};
      monsters = [c14,c15,c16,c17];
    }
    else if (codex.includes("ork")) {
      codex = "Orks";
      let c1 = {name:"Big Mek",description:"Big Mek",M:"5 in.",WS:"3+",BS:"5+",S:5,T:4,W:4,A:3,Ld:7,Sv:"4+"};
      let c2 = {name:"Painboy",description:"Painboy",M:"5 in.",WS:"3+",BS:"5+",S:5,T:5,W:5,A:4,Ld:6,Sv:"4+"};
      let c3 = {name:"Weirdboy",description:"Weirdboy",M:"5 in.",WS:"3+",BS:"5+",S:5,T:4,W:4,A:3,Ld:6,Sv:"6+"};
      let c4 = {name:"Mek",description:"Mek",M:"5 in.",WS:"3+",BS:"5+",S:4,T:4,W:3,A:2,Ld:6,Sv:"6+"};
      let c5 = {name:"Warboss",description:"Warboss",M:"5 in.",WS:"2+",BS:"5+",S:6,T:5,W:6,A:4,Ld:8,Sv:"4+"};
      leaders = [c1,c2,c3,c4,c5];
      let c6 = {name:"Meganobz",description:"Meganobz",M:"4 in.",WS:"3+",BS:"5+",S:5,T:4,W:3,A:3,Ld:6,Sv:"2+"};
      let c7 = {name:"Warbiker",description:"Warbiker",M:"14 in.",WS:"3+",BS:"5+",S:4,T:5,W:2,A:2,Ld:6,Sv:"4+"};
      let c8 = {name:"Flash Git",description:"Flash Git",M:"5 in.",WS:"3+",BS:"5+",S:5,T:4,W:2,A:3,Ld:6,Sv:"6+"};
      let c9 = {name:"Ork Boy",description:"Ork Boy",M:"5 in.",WS:"3+",BS:"5+",S:4,T:4,W:1,A:2,Ld:6,Sv:"6+"};
      let c10 = {name:"Tankbusta",description:"Tankbusta",M:"5 in.",WS:"3+",BS:"5+",S:4,T:4,W:1,A:2,Ld:6,Sv:"6+"};
      let c11 = {name:"Ork Kommando",description:"Ork Kommando",M:"6 in.",WS:"3+",BS:"5+",S:4,T:4,W:1,A:2,Ld:6,Sv:"6+"};
      let c12 = {name:"Stormboy",description:"Stormboy",M:"12 in.",WS:"3+",BS:"5+",S:4,T:4,W:1,A:2,Ld:6,Sv:"6+"};
      let c13 = {name:"Loota",description:"Loota",M:"5 in.",WS:"3+",BS:"5+",S:4,T:4,W:1,A:2,Ld:6,Sv:"6+"};
      let c14 = {name:"Nob",description:"Nob",M:"5 in.",WS:"3+",BS:"5+",S:5,T:4,W:2,A:3,Ld:6,Sv:"4+"};
      let c15 = {name:"Burna",description:"Burna",M:"5 in.",WS:"3+",BS:"5+",S:4,T:4,W:1,A:2,Ld:6,Sv:"6+"};
      let c16 = {name:"Gretchins",description:"Gretchins",M:"5 in.",WS:"5+",BS:"4+",S:2,T:2,W:1,A:1,Ld:4,Sv:"6+"};
      members = [c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];
      let c17 = {name:"Killa Kan",description:"Killa Kan",M:"6 in.",WS:"5+",BS:"4+",S:5,T:5,W:5,A:3,Ld:6,Sv:"3+"};
      let c18 = {name:"DeffKopta",description:"DeffKopta",M:"14 in.",WS:"3+",BS:"5+",S:4,T:5,W:4,A:2,Ld:6,Sv:"4+"};
      let c19 = {name:"Warbuggy",description:"Warbuggy",M:"14 in.",WS:"3+",BS:"5+",S:4,T:5,W:5,A:4,Ld:6,Sv:"4+"};
      let c20 = {name:"Wartrakk",description:"Wartrakk",M:"12 in.",WS:"3+",BS:"5+",S:4,T:5,W:6,A:4,Ld:6,Sv:"4+"};
      let c21 = {name:"Grot Tank",description:"Grot Tank",M:"2D6 in.",WS:"6+",BS:"4+",S:4,T:5,W:4,A:3,Ld:5,Sv:"4+"};
      monsters = [c17,c18,c19,c20,c21];
    }
    else if (codex.includes("tau")) {
      codex = "T'au Empire";
      let c1 = {name:"Marksman",description:"Marksman",M:"5 in.",WS:"5+",BS:"3+",S:3,T:3,W:3,A:2,Ld:7,Sv:"4+"};
      let c2 = {name:"Cadre Fireblade",description:"Cadre Fireblade",M:"6 in.",WS:"3+",BS:"2+",S:3,T:3,W:5,A:3,Ld:8,Sv:"4+"};
      let c3 = {name:"Ethereal",description:"Ethereal",M:"6 in.",WS:"3+",BS:"4+",S:3,T:3,W:4,A:3,Ld:9,Sv:"5+"};
      let c4 = {name:"Kroot Shaper",description:"Kroot Shaper",M:"7 in.",WS:"3+",BS:"4+",S:3,T:3,W:5,A:3,Ld:7,Sv:"6+"};
      leaders = [c1,c2,c3,c4];
      let c5 = {name:"Pathfinder",description:"Pathfinder",M:"7 in.",WS:"5+",BS:"4+",S:3,T:3,W:1,A:2,Ld:7,Sv:"5+"};
      let c6 = {name:"Fire Warrior",description:"Fire Warrior",M:"6 in.",WS:"5+",BS:"4+",S:3,T:3,W:1,A:2,Ld:7,Sv:"4+"};
      let c7 = {name:"Breacher",description:"Breacher",M:"6 in.",WS:"5+",BS:"4+",S:3,T:3,W:1,A:2,Ld:7,Sv:"4+"};
      let c8 = {name:"Vespid",description:"Vespid",M:"14 in.",WS:"4+",BS:"4+",S:3,T:4,W:1,A:2,Ld:8,Sv:"4+"};
      let c9 = {name:"Kroot Carnivore",description:"Kroot Carnivore",M:"7 in.",WS:"3+",BS:"4+",S:3,T:3,W:1,A:1,Ld:6,Sv:"6+"};
      let c10 = {name:"Stealth Battlesuit",description:"Stealth Battlesuit",M:"8 in.",WS:"5+",BS:"4+",S:4,T:4,W:2,A:3,Ld:8,Sv:"3+"};
      let c11 = {name:"Kroot Hound",description:"Kroot Hound",M:"12 in.",WS:"3+",BS:"-",S:3,T:3,W:1,A:2,Ld:5,Sv:"6+"};
      let c12 = {name:"Drones",description:"Drones",M:"8 in.",WS:"5+",BS:"5+",S:3,T:4,W:1,A:1,Ld:6,Sv:"4+"};
      members = [c5,c6,c7,c8,c9,c10,c11,c12];
      let c13 = {name:"Krootox Rider",description:"Krootox Rider",M:"7 in.",WS:"3+",BS:"4+",S:6,T:5,W:4,A:2,Ld:6,Sv:"6+"};
      let c14 = {name:"Crisis Battlesuit",description:"Crisis Battlesuit",M:"8 in.",WS:"5+",BS:"4+",S:5,T:5,W:3,A:3,Ld:8,Sv:"3+"};
      let c15 = {name:"Broadside",description:"Broadside",M:"5 in.",WS:"5+",BS:"4+",S:5,T:5,W:6,A:3,Ld:8,Sv:"2+"};
      let c16 = {name:"Pathfinder Tetras",description:"Pathfinder Tetras",M:"18 in.",WS:"6+",BS:"4+",S:4,T:5,W:4,A:2,Ld:6,Sv:"4+"};
      let c17 = {name:"Hazard Suit",description:"Hazard Suit",M:"8 in.",WS:"5+",BS:"4+",S:5,T:5,W:5,A:3,Ld:8,Sv:"3+"};
      let c18 = {name:"Piranha",description:"Piranha",M:"16 in.",WS:"6+",BS:"4+",S:4,T:5,W:6,A:2,Ld:6,Sv:"4+"};
      monsters = [c13,c14,c15,c16,c17,c18];
    }


    this.navCtrl.push(ChooseTeamPage, {
         'codex' : codex,
         'leaders' : leaders,
          'members' : members,
          'monsters' : monsters
       });



  }

}
