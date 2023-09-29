import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';


/**
 *  Outputs:
 *
 */
@Component({
  selector: 'app-nivel-uno',
  templateUrl: './nivel-uno.component.html',
  styleUrls: ['./nivel-uno.component.css']
})
export class NivelUnoComponent {
  hijos = ['luis','armando','lorena','penelope'];

  @Input() color?:string;

  @Output() beforeChildChanges = new EventEmitter<number>()
  @Output() afterChildChanges = new EventEmitter<number>()


  constructor() {
  }

  nuevoHijo(nombre: string){
      this.beforeChildChanges.emit(this.hijos.length);
      this.hijos.push(nombre); // tardase mucho tiempo
      this.afterChildChanges.emit(this.hijos.length);
  }



}
