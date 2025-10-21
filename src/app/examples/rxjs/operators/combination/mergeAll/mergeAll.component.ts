import { Component } from '@angular/core';
import { mergeAll, interval, map, take } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-merge-all',
  template: `
    <h3>mergeAll</h3>
    <p>{{ salida }}</p>
  `
})
export class MergeAllComponent {
  salida = '';

  constructor() {
    const fuente$ = interval(2000).pipe(
      take(2),
      map(i => interval(500).pipe(take(3), map(j => `Inner${i}-${j}`)))
    );

    fuente$.pipe(mergeAll()).subscribe(v => (this.salida += v + ' | '));
  }
}
