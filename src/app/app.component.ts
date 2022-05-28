import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'joshua';
  valor: number = 10;
  obj = {
    nombre: this.nombre,
    valor: this.valor,
  };

  mostrarNombre() {
    console.log(this.nombre);
  }
}
