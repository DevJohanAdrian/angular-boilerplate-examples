import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {  iif, interval, take } from 'rxjs';

@Component({
  selector: 'app-lif',
  imports: [],
  template: ` <button (click)="toggle()">Cambiar modo</button>
    <p>Modo: {{ mode() }}</p>
    <p>{{ result() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Ejecuta uno de dos observables según una condición. Similar a un if reactivo.
// iif(
// () => condición,       // función que devuelve true o false
// observableSiTrue,      // se ejecuta si la condición es true
// observableSiFalse      // se ejecuta si la condición es false
//);
export class LifComponent {
  mode = signal<'rápido' | 'lento'>('rápido');
  result = signal<string>('');

   toggle() {
    this.mode.update(m => (m === 'rápido' ? 'lento' : 'rápido'));

    iif(
      () => this.mode() === 'rápido',
      interval(500).pipe(take(5)),
      interval(1000).pipe(take(5))
    ).subscribe(value => {
      this.result.update(v => v + ' , ' + value);
    });
  }
}
