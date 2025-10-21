import { Component } from '@angular/core';
import { race, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-race',
  template: `
    <h3>race</h3>
    <p>{{ salida }}</p>
  `
})
export class RaceComponent {
  salida = '';

  constructor() {
    const lento$ = interval(1000).pipe(take(3), map(v => `Lento ${v}`));
    const rapido$ = interval(500).pipe(take(3), map(v => `Rápido ${v}`));

    race(lento$, rapido$).subscribe(v => (this.salida += v + ' | '));
  }
}
