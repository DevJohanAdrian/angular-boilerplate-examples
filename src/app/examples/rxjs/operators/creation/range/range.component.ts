import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  imports: [],
  template: `<h3>Numero generados</h3>
  <p>{{ numeros().join(', ')}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Mostrar una lista numerada del 1 al 5 generada reactivamente.
export class RangeComponent { 
  numeros = signal<number[]>([]);

  constructor (){

    range(1,5).subscribe( val => { this.numeros.update(arr => [...arr, val]) } );
  }
}
