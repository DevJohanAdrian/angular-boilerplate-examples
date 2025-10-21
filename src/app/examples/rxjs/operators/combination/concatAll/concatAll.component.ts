import { Component } from '@angular/core';
import { concatAll, interval, map, take } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-concat-all',
  template: `
    <h3>concatAll</h3>
    <p>{{ salida }}</p>
  `
})
export class ConcatAllComponent {
  salida = '';

  constructor() {
    const secuencia$ = interval(1500).pipe(
      take(2),
      map(i => interval(500).pipe(take(3), map(j => `Inner${i}-${j}`)))
    );

    secuencia$.pipe(concatAll()).subscribe(v => (this.salida += v + ' | '));
  }
}
