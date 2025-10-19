import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-range',
  imports: [],
  template: `<h3>Numero generados</h3>
  <p></p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Mostrar una lista numerada del 1 al 5 generada reactivamente.
export class RangeComponent { 
  numeros = signal<number[]>([]);
}
