import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
// import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService: DbzService){
    // dbzService.
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];//copia del objeto
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }

  // public characters: Character[] = [
  //   {
  //   name: 'Krillin',
  //   power: 1000
  // },
  // {
  //   name: 'Goku',
  //   power: 9500
  // },
  // {
  //   name: 'Vegeta',
  //   power: 7500
  // }];

  // public onNewCharacter(character: Character): void{
  //   // console.log("Main Page: ", character);
  //   // this.characters.unshift(character);// al principio
  //   this.characters.push(character);
  //   //navegador para grabar textos, unos 10MB

  // }

  // public onDelete(index: number): void{
  //   this.characters.splice(index, 1);
  // }
}
