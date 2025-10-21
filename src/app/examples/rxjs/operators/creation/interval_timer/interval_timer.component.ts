import { ChangeDetectionStrategy, Component } from '@angular/core';
import { signal } from '@angular/core';
import { timer, interval } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-interval-timer',
  imports: [],
  template: `<h3>Contador</h3>
    <p>Contador: {{ contador() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Crear un contador en pantalla que se actualice cada segundo y comience después de 3 segundos.
// take 10 valores del contador lo que hara que solo sea un contador hasta 10.
export class IntervalTimerComponent {
  contador = signal(0);

  constructor() {
    timer(3000)
      .pipe(
        switchMap(() => interval(1000)),
        take(10),
      )
      .subscribe((val) => {
        this.contador.set(val + 1);
      });
  }
}
