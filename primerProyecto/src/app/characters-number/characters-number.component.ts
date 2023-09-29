import { CharacterService } from './../character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters-number',
  templateUrl: './characters-number.component.html',
  styleUrls: ['./characters-number.component.css']
})
export class CharactersNumberComponent {

    constructor(public characterService: CharacterService) {

    }
}
