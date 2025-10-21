import { Component } from '@angular/core';
import { forkJoin, of, delay } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-forkjoin-demo',
  template: `
    <h3>forkJoin</h3>
    <p>{{ salida }}</p>
  `
})
export class ForkJoinComponent {
  salida = '';

  constructor() {
    const a$ = of('Datos A').pipe(delay(1000));
    const b$ = of('Datos B').pipe(delay(2000));

    forkJoin([a$, b$]).subscribe(([a, b]) => (this.salida = `${a} + ${b}`));
  }
}
