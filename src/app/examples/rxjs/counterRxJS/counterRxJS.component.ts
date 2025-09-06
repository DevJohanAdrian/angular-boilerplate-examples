import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-rx-js',
  imports: [CommonModule],
  template: `
    <h2>Contador con RxJS</h2>
    <p>El observable emitió: {{ counter$ | async }}</p>
    <p>El observable manual emitió: {{ custom$ | async }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterRxJSComponent {
  // Observable que emite un número cada segundo
  counter$ = interval(1000);

  // Creamos un observable manual
  custom$ = new Observable<number>((observer) => {
    let value = 0;

    // Emitimos un valor cada segundo
    const intervalId = setInterval(() => {
      observer.next(value++); // emitimos el siguiente valor
    }, 1000);

    // Cleanup cuando se desuscriba
    return () => clearInterval(intervalId);
  });
}
