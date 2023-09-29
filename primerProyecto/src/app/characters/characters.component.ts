import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  miObs$?: Observable<any[]>;

  constructor(private characterService: CharacterService){
  }

  ngOnInit(): void {
    this.miObs$ = this.characterService.characters;
    
  }


}
