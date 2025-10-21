import { Component } from '@angular/core';
import { concat, of, delay } from 'rxjs';

@Component({
  selector: 'app-concat',
  template: `
    <h3>concat</h3>
    <p>{{ salida }}</p>
  `
})
// concat Ejecuta observables secuencialmente: espera a que el primero complete antes de suscribirse al siguiente.
export class ConcatComponent {
  salida = '';

  constructor() {
    const usuarios$ = of('Cargando usuarios...').pipe(delay(1000));
    const posts$ = of('Cargando posts...').pipe(delay(1000));

    concat(usuarios$, posts$).subscribe(v => (this.salida += v + ' | '));
  }
}
