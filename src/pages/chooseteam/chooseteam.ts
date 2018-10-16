import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { TeamRosterPage} from "../teamroster/teamroster";

@Component({
  selector: 'page-chooseteam',
  templateUrl: 'chooseteam.html'
})
export class ChooseTeamPage {

  codex: any;
  leaders : any;
  members: any;
  monsters: any;
  chosenCharacters: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codex = navParams.get('codex');
    this.leaders = navParams.get('leaders');
    this.members = navParams.get('members');
    this.monsters = navParams.get('monsters');
    this.chosenCharacters = new Array();
  }

  selectCharacter(character) {

    console.log(character);
    let id = (character.name) + "text";
    let element: HTMLElement = document.getElementById(id);
    //console.log(element.classList.contains("selected"));

    if (element.classList.contains("selected")) { //if the character is currently selected
          //remove classes
          element.classList.remove("selected");

          //remove from chosenColors array
          this.remove(this.chosenCharacters, character);

          //make middle div not show
          document.getElementById(id).style.display = "none";
          document.getElementById(character.name).style.opacity = "1";

          //reorder selected characters
          let number = 1;

          for (let choice of this.chosenCharacters) {
            console.log(choice + " " + number);
            let choiceid = choice.name + "text";
           var content = document.getElementById(choiceid);
            content.innerHTML = number +"";
            number++;
          }

          console.log(this.chosenCharacters);
          return
        }

        if (!element.classList.contains("selected")) { //if the character is not selected
           //add  class
           element.classList.add("selected");

           //add to chosenColors array
           this.chosenCharacters.push(character)

           //make middle div show
           document.getElementById(id).style.display = "inline-block";
           document.getElementById(character.name).style.opacity = "0.5";


           //reorder selected characters
           let number = 1;

           for (let choice of this.chosenCharacters) {
             console.log(choice + " " + number);
             let choiceid = choice.name + "text";
            var content = document.getElementById(choiceid);
             content.innerHTML = number +"";
             number++;
           }
   }

     //if length == 4 ---> go to font page
     if (this.chosenCharacters.length == 5) {
        let abilities1 = new Array();
        let abilities2  = new Array();
        let abilities3  = new Array();
        let abilities4  = new Array();
        let abilities5  = new Array();

         this.navCtrl.push(TeamRosterPage, {
              'chosenCharacters' : this.chosenCharacters,
              'progress1' : 0,
              'progress2' : 0,
              'progress3' : 0,
              'progress4' : 0,
              'progress5' : 0,
              'abilities1' : abilities1,
              'abilities2' : abilities2,
              'abilities3' : abilities3,
              'abilities4' : abilities4,
              'abilities5' : abilities5
            });

     }
     console.log(this.chosenCharacters);
  }



  remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }

}
}
