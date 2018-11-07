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
      let objective = "Protect the planetary governor and escort him to his safe escape onboard his Planetary Defence Force transport";
      let specialRules = "Ambush- Enemies to the player come onto the map using the following mechanic. Roll a D6. On a 1 the unit comes onto the table edge more than 9” from the player units. On a 2 or 3 unit can be placed on any piece of terrain more than 9” from player models. If no such terrain exists this roll acts as a roll of 1. On a 4 or 5 place the unit anywhere on the board more than 9” from player models. On a 6 place the unit anywhere on the board more than D6” from player models.";
      let allies = "Julian Conscord- Use Astra Militarum Company Commander rules.";
      let enemies = "Rebels- Use Astra Militarum infantry, special weapons, and heavy weapons squad rules.\n\nRoving mobs- Use Astra Militarum conscript rules. \n\nRooftop snipers- Use Astra Militarum rattling rules. \n\nHired gun- Use Officio Assassinorum rules (Limit 1 per player)";
      let description2 = "The factions of the planet Byzant are powerful as they are numerous. They choke the daily life of the planet with inner planetary fights and squabbles. The largest and richest factions have observed your warbands skills in protecting their governor and are impressed, they now call upon you now to settle old scores between regional commanders each looking for a little more elbow room in the capital.";
      let objective2 = "Each player must defend a respective regional commander in a street brawl to dictate political supremacy in the region. Destroy the other players regional commander while keeping yours as the last man standing.";
      let specialRules2 = "Strength in Diversity: Each player may pick a regimental trait for their respective allies";
      let allies2 = "Regional Commander- Use Astra Militarum Platoon Commander rules (limit 1 per player)\n\nArmoured Transport - Use Astra Militarum Chimera rules (limit 1 per player)\n\nRetinue- Use Astra Militarum Company command squad rules (limit 1 per player)\n\nGoon Squads- Use Astra Militarum veteran squad rules (limit 2 per player)";
      let enemies2 = "Look away";
      let description3 = "With their regional commander having little standing in the way, the winning faction soared. Grinding their enemies into dust and consolidating their hold in the capital. Now is the moment to strike and obtain the last seats of power not twisted into their image. The Planetary Bank, Court, and Armoury.";
      let objective3 = 'Hold the seats of power. Designate 3 objectives, one as the Planetary Bank, one as the Planetary Court and one as the Planetary Armoury. At the end of turn 5 the winner of mission two rolls a D6, on a 4+ the game continues. At the end of turn 6 that player rolls a D6, on a 5+ the game continues. All subsequent turns require a D6 roll of 6+. At the end of the game track which players hold which objectives. The player with the most objectives at the end wins. Objectives are held by having more models within 2” then opposing players.';
      let specialRules3 = 'Momentum: The winning player from Mission 2 gets the Regional Commander and Armoured Transport, using Astra Militarum Platoon Commander and Chimera Rules, as an additional ally.\n\nStrength in Diversity: Each player may pick a regimental trait for their respective allies.\n\nObjective Secured: Player’s kill team units always count as having more models within the objective. If more than one player has their model within 2” of the the player with the more units (including non-kill team allies).';
      let allies3 = "Retinue- Use Astra Militarum company command squad rules (limit 1 per player)\n\nTroops- Use Astra Militarum infantry squad rules (limit 3 per player)\n\nWeapons Teams- Use Astra Militarum special or heavy weapons squad (limit 2 per player)\n\nScout Team- Use Astra Militarum scout or armoured Scentinel rules (limit 1 per player)";
      let enemies3 = "Planetary Defence Forces- Use Astra Militarum Infantry Squad (1 per objective) ";
      let description4 = "From the capital your chosen factions spread their power base to ensnare the rest of Byzant. Each one looking to make the planet into their image before the final grab for power. It is time to tear down the relics of old Byzant and shape her into one people, one planet.";
      let objective4 = 'Designate 3 Objectives per player, take turns placing these objectives on the board no more than 8” from another objective. When a player or their ally comes within 2” of an objective designate that objective as the players. These objectives will only change if no unit of the controlling player is within 2” and another player or their ally comes within 2” of the objective.';
      let specialRules4 = "Momentum: The winning player from Mission 2 gets the Regional Commander and Armoured Transport, using Astra Militarum Platoon Commander and Chimera Rules, as an additional ally.\n\nStrength in Diversity: Each player may pick a regimental trait for their respective allies.\n\nSeats of Power: Player bonuses for holding objectives from Mission 3.\n\nPlanetary Bank- Player upgrades all Ally Troops to using Astra Militarum Veteran squad rules.\n\nPlanetary Court- Player gains an additional 5 command points at the beginning of the game.\n\nPlanetary Armoury- Player gains one Leman Russ Tank as an ally.";
      let allies4 = "Retinue- Use Astra Militarum company command squad rules (limit 1 per player)\n\nTroops- Use Astra Militarum infantry squad rules (limit 3 per player)\n\nWeapons Teams- Use Astra Militarum special or heavy weapons squad (limit 3 per player)\n\nScout Team- Use Astra Militarum scout or armoured Scentinel rules (limit 2 per player)";
      let enemies4 = "Avert your eyes";
      let description5 = "The final obstacle to planetary unification is holding strong in Governor Conscord. Under his iron will, supported by the forest of bayonets sent by the halls of Terra herself, Conscord has managed to build peace on Byzant using bloody intimidation and a churning allegiance of political disunion. The choice is now yours, will you keep Byzant’s ways of strength through diversity or will you usher in a new Byzant, a united Byzant.";
      let objective5 = 'Each player secretly choose to either side with your chosen faction or Governor Conscord’s forces. Players that choose their faction will deploy with their allies 9” from the table edge and more than 9” away from enemy models. The narrator can choose to limit boundaries to ensure all players have their forces represented. These forces are looking to capture the objective, the Governor’s Mansion at the center of the map. Players that choose to side with Governor Conscord’s forces are to deploy 12” from the objective, the Governor’s Mansion, at the center of the map. The faction that has more units within 2” of the objective after the end of turn 8 win the game and claim Byzant for their faction or Conscord. If there is a tie, continue the game for an additional turn until one faction has more models within 2” of the objective this faction wins the game.';
      let specialRules5 = 'Strength in Diversity: Each player may pick a regimental trait for their respective faction from previous games. For the forces of Governor Conscord this is represented by having a regimental trait of re-rolling all failed moral tests and add 1 to their armour save if in cover.\n\nMomentum: The winning FACTION from Mission 2 gets the Regional Commander and Armoured Transport, using Astra Militarum Platoon Commander and Chimera Rules, as an additional ally.\n\nSeats of Power: FACTION bonuses for holding objectives from Mission 3.\n\nPlanetary Bank- Faction upgrades all Ally Troops to using Astra Militarum Veteran squad rules.\n\nPlanetary Court- Faction gains an additional 5 command points at the beginning of the game.\n\nPlanetary Armoury- Faction gains one Leman Russ Tank as an ally.\n\nHearts and Minds of the People: The winning FACTION from Mission 4 does not suffer moral and adds 1 to all charge and run rolls.';
      let allies5 = "No quiero usted";
      let enemies5 = "Oye, besame";
      mission1 = {name:"Mission 1",description:description,objective:objective,specialRules:specialRules,allies:allies,enemies:enemies};
      mission2 = {name:"Mission 2",description:description2,objective:objective2,specialRules:specialRules2,allies:allies2,enemies:enemies2};
      mission3 = {name:"Mission 3",description:description3,objective:objective3,specialRules:specialRules3,allies:allies3,enemies:enemies3};
      mission4 = {name:"Mission 4",description:description4,objective:objective4,specialRules:specialRules4,allies:allies4,enemies:enemies4};
      mission5 = {name:"Mission 5",description:description5,objective:objective5,specialRules:specialRules5,allies:allies5,enemies:enemies5};
      //console.log (mission1);
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions, mainColor:"#2f5834", fontColor:"#55a05f",class:"one"};
      //console.log(campaign);
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
      campaign = {name:name, missions:missions, mainColor:"#576047", fontColor:"#abbc8b",class:"two"};
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
      campaign = {name:name, missions:missions, mainColor:"#284358", fontColor:"#528ab5",class:"three"};
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
      campaign = {name:name, missions:missions, mainColor:"#581f16", fontColor:"#ba412e",class:"four"};
    }
    else if (name.includes("Requiritur Festivitas")) {
      let description1p1 = 'The first day of the annual Requiritur Festivitas: a five day rendezvous courtesy of yours trulies, the chaos gods.  Each god gifts beings of the realm (regardless of race, tail length, tail girth, and agenda) with a day of festivities with the metaphorical fireworks of the sequence of unfortunate events being the fifth and final day of Requiritur Festivitas where all gods set aside (some of a negligible amount of) chaos to co-host Cojones Grandes, a grand ball. Oh and did we mention attendance is mandatory, and participation is enforced rather brutally? Slaneesh’s sexualized slumber party soiree kicks off the merry-making with a sexy splashy sploosh with each of the attendants being one of the chaos god’s love interests (so in other words, everyone is invited). Enroute through the deadly sin circle of lust with a sprinkle of pride, you arrive at the looming doors of Slaneesh’s bedchambers where you are greeted by burlesque daemonettes with complimentary ';
      let description1p2 = 'Sex on the Beaches, your own personal copy of The Cama Sucia for Chaotic Beings (self-published and signed by Slaneesh), a consent contract, and a vision of overwhelming violet (or violence, hard to distinguish). Take of your pants, and get ready to prove who are the doms and who are the subs by way of a friendly friendzoned foreplay pillow fight. “Harder,” coaxes Slaneesh.';
      let objective1 = "Successfully pillow-pummel your opponents to sweet dreams nirvana to become the dom in your relationship.  The player with the most non-pummeled pawns is the crowned dom of the crew, and the player with the most slumbering slew is the sub and has to prove their loyalty to the dom by giving him/her/it a well-deserved hand massage.";
      let specialRules1 = 'Pants and/or shirt must be off (or - 3 strength)\n\nPajamas encouraged (players wearing pajamas get +5 strength)\n\nOnly snack allowed is stove-popped popcorn\n\nAll weapon names need to be referred to as “(previous weapon name) pillow”\n\nStrength is now “sexually-infused turmoil,” and health is now “passion,” and target range is now “wingspan”\n\nEvery time a warrior dies in passion, the player of the warrior is required to make a bedroom noise of his/her/its preference as a tribute to love after the killing player whispers a sweet something in their opponent’s ear\n\nWhoever\'s love horoscope sounds the most competent, +1 strength';
      let allies1 = "Puberty\n\nConsent\n\nAmor\n\nNipping out\n\nhttps://open.spotify.com/playlist/1y5ACQ3zUOD9u5Fak7o4jm";
      let enemies1 = "Lost love\n\nForgotten promises\n\nBig dick syndrome\n\nSexual tension";
      let description2 = "Day 2 introduces itself with clammy hands: welcome to Khorne’s poolside barbeque. For all you Twitter tweeters, the hashtag for this afternoon is #barbequeforthebloodgod. Setting the scene: it’s a sunny-side up kind of day with the ambient noise of crushing skulls in the not-so-distant distance, and Khorne is stoking the charcoal of his new grill, cracking a few beers and some dad jokes in his jorts, all whilst flirting devilishly with Valkia the Bloody. Fleshhounds are playfully gnawing on your limbs, flamingo floaties sit lazily in the welcoming pool of blood in the middle of the backyard patio, and everyone participated in the potluck orchestrated by Khorne, leaving a pleasant collection of cheeses, tomatoes, artichokes, mushrooms, condiments, and pickles, with the meat being the only thing still absent. Getting admittedly a little hangry, everyone’s gaze drift over to Khorne at the colossal grill, only to find he is now flirting with Mork and Gork but is ";
      let description2p2 = "still only stoking the charcoal. Noticing the awkward silence finally, Khorne admits he forgot to mention that the invitation neglected to include his usual BYOB (bring your own blood) policy and that you will all have to make do. Sorry not sorry.";
      let objective2 = "Simply supply the meat by harvesting the warriors of your fellow players.  The player who supplies the most barbeque to the blood god will win by gaining his favor.";
      let specialRules2 = "Every player provides a snack/drink to share (Optional actual grill out after as a memorial event)\n\nSmile, you’re having fun\n\nSunglasses → +2 strength\n\nSwimsuit → +2 strength\n\nFor every harvest, one must proclaim in a menacingly deep but festive voice, “Barbeque for the blood god”\n\nPlace something to placehold as the welcoming pool of blood in the middle of the playing scene → the closest opponent to one of your warriors can be pushed into the pool (certain death) on any turn by rolling two D6s and having the numbers add up to 8 (Khorne’s fav number)\n\nWhoever's food horoscope is the most decadent, +1 strength";
      let allies2 = "Sunscreen (SPF 50)\n\nOversized totes to carry things and people in\n\nhttps://open.spotify.com/playlist/174UZim0Uv8WSKht1EFM8i";
      let enemies2 = "Hunger\n\nSocks and sandals";
      let description3 = 'Day 3 approaches with a still-bloodied 5 o\'clock shadow. It’s time for some TLC: Grandpa Nurgle’s sorry-excuse-for-a-spa retreat hosted in his “massive” rotting garden (it’s really just average, but please stroke his tender, blobby ego).  For the occasion, Nurgle has decided to gift his guests with only smallpox (largepox can wait for tomorrow) and otherwise focus on disease prevention since quite frankly, he pervertedly likes the challenge of the chase.  So here you all are: plaguebearers lay out greased yoga mats, great unclean ones pour chai tea from rusty cauldrons, and hot springs cackle your name (who knows how they know it… ignore this) over the sound of detonating bath bombs.  Pour a cup of tea, light a candle, and let’s toast: to a day of you, and only you.';
      let objective3 = "With the garden overpopulated, some population control (Nurgle happily agreed to help with the cleanup) is necessary in order for you to achieve enlightenment since everyone’s labored breathing and regular (and irritatingly still present) organ functioning is disrupting your balance.  Achieve enlightenment by killing off at least half of all other players’ warriors, drinking eight glasses of water/tea/watery tea, and getting all your nails painted.";
      let specialRules3 = "For each kill, killer stays in Warrior Won while the player of the deceased paints one of the nails of the killer with Nurgle Green\n\nEvery twenty minutes, everyone must do a 7-7-7 breathing exercise\n\nWearing a robe/towel → +3 strength\n\nLight a candle to set the mood\n\nTurn on a virtual fireplace\n\nWhoever's weekly horoscope is the most boring and probably then the most stressfree +1 strength";
      let allies3 = "Balance\n\nFoot scrubs\n\nhttps://open.spotify.com/playlist/4mH78viCxD3RfJ5LgrVR7y";
      let enemies3 = "Non-isolation\n\nThe bathroom";
      let description4 = "Day 4 announces its ominous and ephemeral presence with a mind-noodling coo.  To switch things up (insert mandatory laugh or forfeit a limb), Tzeentch is concocting a magically unholy pub crawl turned pub brawl… oopsies. The stars peer down with barbed wire gazes, the moon briefly comes out of its fugitive state, and everything is curiously emitting an uncomfortably atomic orange glow.  An ever-changing maze lush with squealing horrors, burning flames, decadent fruits of knowledge, and rock and roll, spills before you, bleeding out. The backdrop of beats encases you on a molecular level (oh does it tickle), and darkness caresses the land in a very unwarranted way.  With looks to kill and a state of slightly toastedness, the night and its schemes begin.";
      let objective4 = "Glass smashing, buzzed battalions, and coquettish barstool heart-to-hearts, your goal is simple: don’t let the party die by simply transferring the lifeblood of your opponents to the party’s spirit. I’d drink to that.";
      let specialRules4 = 'Everyone has an alcoholic drink at all times (if not, -2 strength)\n\nRequired group “cheers to the change god” every 9 minutes following a round of Fuzzy Duck (loser takes an extra drink)\n\nBackground music needs to be diverse in genre (minus country), and no song will play to completion \n\nGet a kill, give a drink (we’re all about retribution here)\n\nWearing all black to blend in with the night is rewarded with with +2 strength\n\nWhoever\'s hustle star rating for today is the lowest -1 strength';
      let allies4 = "Patron XO\n\nTylenol\n\nKnee pads for crawling\n\nhttps://open.spotify.com/playlist/4jfHBmDDyWKEaBBv7unjmu";
      let enemies4 = "Run ins with exes\n\nKaraoke \n\nFake ids";
      let description5 = "Bienvenidos a Cojones Grandes. We hope you brought protection. Guests arrive in hoards of norse-drawn carriages to The Eye of Terror, the only suitable venue for hosting such a high volume of the galaxies most dangerous, yet surprisingly sensitive, warriors.  The halls are decked with gold-plated still-beating hearts, the ballroom floor is pleasantly polished bone of those who have wronged the gods, and visually-appealing arrangements of forever-imprisoned souls make for marvelous table centerpieces that you might end up repinning on your Pinterest. Requiritur Festivitas has come to an end, and the gods are pleased with the amount of attendance and participation they have received (not that we had a choice??), leaving us with another successful one for the sad, sad collection of misinformation we are going to refer to as history.  However, just as everyone is starting to enjoy themselves over the spiked punch (be careful for the points) and free-ish food, ";
      let description5p2 = "Slaanesh, Khorne, Nurgle and Tzeentch begin bickering about who hosted the least-lowly rated  event in celebration of Requiritur Festivitas.  Chaos again enters your lives, and the time for choosing sides starts now.";
      let objective5 = "Do your tribute god the most good in hopes of being spared your short-lived mortal lives. The player with the most cojones at the end is triumphant and should go home and anxiously await next year’s festivities while perennially trying to cleanse oneself of this year’s spotlight side effects.";
      let specialRules5 = 'Each player chooses a Chaos God to support, and kills made must follow these rules:\n\n\tSlaneesh: hip thrust paired with an exclamation of “fill me up”\n\n\tKhorne: self-butt slap accompanied by a “skull for the skull throne”\n\n\tNurgle: drool a bit and lick your lips\n\n\tTzeentch: push up metaphorical glasses and say “fate is great”\n\nFor each kill, the killing warrior’s player gains as many cojones as the height of the pawn killed. The player with the most cojones after 45 minutes ';
      let specialRules5p2 = "winsOnly instrumental music can be played\n\nSince it is a formal event, be mindful of your Pleases and Thank Yous (failing to do so could result in mild choking that you may find you enjoy)\n\nDresses → +4 strength\n\nNavy and black → -2 strength\n\nWeirdly-placed Glitter → +1 strength\n\nWhoever\'s success star rating for today is the highest +1 strength";
      let allies5 = "Will to live\n\nHair-pulling\n\nIll-defined rules\n\nhttps://open.spotify.com/playlist/4PIDZkT50l8oupVX5cFaSm";
      let enemies5 = "Ill-defined rules\n\nThe illusion of trust\n\nThe blood stains you are going to have to get out of your sophisticated clothing so you can return it";
      mission1 =  {name:"Mission 1",description:description1p1+description1p2,objective:objective1,specialRules:specialRules1,allies:allies1,enemies:enemies1};
      mission2 = {name:"Mission 2",description:description2+description2p2,objective:objective2,specialRules:specialRules2,allies:allies2,enemies:enemies2};
      mission3 = {name:"Mission 3",description:description3,objective:objective3,specialRules:specialRules3,allies:allies3,enemies:enemies3};
      mission4 = {name:"Mission 4",description:description4,objective:objective4,specialRules:specialRules4,allies:allies4,enemies:enemies4};
      mission5 = {name:"Mission 5",description:description5+description5p2,objective:objective5,specialRules:specialRules5,allies:allies5,enemies:enemies5};
      missions.push(mission1);
      missions.push(mission2);
      missions.push(mission3);
      missions.push(mission4);
      missions.push(mission5);
      campaign = {name:name, missions:missions, mainColor:"#512558", fontColor:"#a84db7",class:"five"};
    }


    this.navCtrl.push(CampaignPage, {
         'campaign' : campaign
       });
  }

}
