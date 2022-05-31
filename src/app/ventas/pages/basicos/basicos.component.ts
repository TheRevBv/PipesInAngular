import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'joshua';
  nombreUpper: string = 'JOSHUA';
  nombreTitle: string = 'JOsHua mORIn';

  fecha: Date = new Date();
}
