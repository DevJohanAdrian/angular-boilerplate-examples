import { Component } from '@angular/core';
import { zip, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-zip',
  template: `
    <h3>zip</h3>
    <p>{{ salida }}</p>
  `
})
export class ZipComponent {
  salida = '';

  constructor() {
    const nombres$ = interval(1000).pipe(take(3), map(i => `User${i}`));
    const roles$ = interval(1500).pipe(take(3), map(i => `Role${i}`));

    zip(nombres$, roles$).subscribe(([n, r]) => (this.salida += `${n}:${r} | `));
  }
}
