import { Component } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  toogle = true;

  constructor(private sss: CharacterService){

  }

  change() {
    this.toogle = !this.toogle
  }

  more() {
    this.sss.loadPage(2);
  }

}
