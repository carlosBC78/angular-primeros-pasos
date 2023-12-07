import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

console.log("id único v4()", uuid());


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // public onNewCharacter(character: Character): void{
  //   // console.log("Main Page: ", character);
  //   // this.characters.unshift(character);// al principio
  //   this.characters.push(character);
  //   //navegador para grabar textos, unos 10MB

  // }

  public addCharacter( character: Character): void {

    const newCharacter: Character = {
      id: uuid(),
      ...character// expander las propiedades del objeto
    }
    this.characters.push(newCharacter);
  }

  // public onDelete(index: number): void{
  //   this.characters.splice(index, 1);
  // }

  public deleteCharacterById(id: string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

  // constructor() { }

}
