import { Component } from '@angular/core';
import { merge, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  template: `
    <h3>merge</h3>
    <p>{{ salida }}</p>
  `
})
export class MergeComponent {
  salida = '';

  constructor() {
    const a$ = interval(1000).pipe(take(3), map(v => `A${v}`));
    const b$ = interval(700).pipe(take(3), map(v => `B${v}`));

    merge(a$, b$).subscribe(v => (this.salida += v + ' | '));
  }
}
