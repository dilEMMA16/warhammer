import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'savedGames';
/*
  Generated class for the SaveGameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaveGameProvider {

  constructor( public storage: Storage) {
    console.log('Hello SaveGameProvider Provider');
  }


  saveGame(gameName,char1,char2,char3,char4,char5,exp1,exp2,exp3,exp4,exp5,abi1,abi2,abi3,abi4,abi5) {
    let game = {name:gameName,character1:char1,character2:char2,character3:char3,character4:char4,character5:char5,experience1:exp1,experience2:exp2,experience3:exp3,experience4:exp4,experience5:exp5,abilities1:abi1,abilities2:abi2,abilities3:abi3,abilities4:abi4,abilities5:abi5};
    return this.getAllSavedGames().then(result => {
      console.log("local storage for save gave " + result);
      if (result) {
        result.push(game);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  deleteGame(index,gameName,char1,char2,char3,char4,char5,exp1,exp2,exp3,exp4,exp5,abi1,abi2,abi3,abi4,abi5) {
    // let game = {name:gameName,character1:char1,character2:char2,character3:char3,character4:char4,character5:char5,experience1:exp1,experience2:exp2,experience3:exp3,experience4:exp4,experience5:exp5,abilities1:abi1,abilities2:abi2,abilities3:abi3,abilities4:abi4,abilities5:abi5};
    // let savedGames = this.getAllSavedGamesArray();
    // var indexOfGame = -1;
    // var count = 0;
    // for (var savedGame in savedGame) {
    //       //check if games are the same
    //       if (savedGame.name == game.name){
    //         if(savedGame.character1 == game.character1 && savedGame.character2 == game.character2 && savedGame.character3 == game.character3 && savedGame.character4 == game.character4 && savedGame.character5 == game.character5){
    //           if(savedGame.experience1 == game.experience1 && savedGame.experience2 == game.experience2 && savedGame.experience3 == game.experience3 && savedGame.experience4 == game.experience4 && savedGame.experience5 == game.experience5 ){
    //             if(savedGame.abilities1 == game.abilities1 && savedGame.abilities2 == game.abilities2 && savedGame.abilities3 == game.abilities3 && savedGame.abilities4 == game.abilities4 && savedGame.abilities5 == game.abilities5 ){
    //               indexOfGame = count;
    //             }
    //           }
    //         }
    //       }
    //       count++;
    // }
    return this.getAllSavedGames().then(result => {
      if (result) {
        //var index = result.indexOf(game);
        //console.log("result of index for game" + index);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
        }

      });
  }

  getAllSavedGames() {
      return this.storage.get(STORAGE_KEY);
    }

    getAllSavedGamesArray() {
      let savedGames = new Array();
      this.getAllSavedGames().then(result => {
        savedGames = result;
        console.log("local storage gave " + result);
        return savedGames;
    });

      }


}
