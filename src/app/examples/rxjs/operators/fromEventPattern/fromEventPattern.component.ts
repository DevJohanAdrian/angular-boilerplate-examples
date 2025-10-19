import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { fromEventPattern } from 'rxjs';


function addHandler(handler: (value: string) => void) {
  const interval = setInterval(() => handler('Ping 🟢'), 1000);
  return interval;
}

function removeHandler(interval: any) {
  clearInterval(interval);
}

@Component({
  selector: 'app-from-event-pattern',
  imports: [],
  template: `<p>{{ message() }}</p>
    <button (click)="stop()">Detener</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Permite crear observables a partir de eventos personalizados, cuando no hay un objeto DOM o EventEmitter nativo.
export class FromEventPatternComponent {
  message = signal<string>('Iniciando...');

  subscription: any;

  constructor() {
    const observable = fromEventPattern<string>(addHandler, removeHandler);
    this.subscription = observable.subscribe(value => this.message.set(value));
  }

  stop() {
    this.subscription.unsubscribe();
    this.message.set('Detenido ⛔');
  }
  
 }
