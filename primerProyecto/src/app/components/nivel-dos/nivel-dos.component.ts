import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nivel-dos',
  templateUrl: './nivel-dos.component.html',
  styleUrls: ['./nivel-dos.component.css']
})
export class NivelDosComponent {
  @Input('name') title?: string;
  @Input() edad?: number;
}


