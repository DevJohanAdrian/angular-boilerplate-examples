import { Component } from '@angular/core';
import { combineLatestAll, interval, map, take } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-combine-latest-all',
  template: `
    <h3>combineLatestAll</h3>
    <p>{{ resultado }}</p>
  `
})
export class CombineLatestAllComponent {
  resultado = '';

  constructor() {
    const sensores$ = interval(2000).pipe(
      take(2), // toma los dos primeros valores: 0 y 1
      map(i => interval(1000).pipe(map(v => `S${i}: ${v}`)))
    );

    sensores$.pipe(combineLatestAll()).subscribe(valores => {
      this.resultado = valores.join(' | ');
    });
  }
}
