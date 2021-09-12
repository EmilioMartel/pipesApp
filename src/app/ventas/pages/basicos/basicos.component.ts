import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  
  nombreLower: string = 'emilio';
  nombreUpper: string = 'EMILIO';
  nombreCompleto: string = "EmilIO MaRTel";

  fecha: Date = new Date();

  constructor() { }

 

}
