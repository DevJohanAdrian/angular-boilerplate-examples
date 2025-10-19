import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import { signal } from '@angular/core';

// Simula una operación asíncrona que utiliza un callback.

function fakeAsyncOperation(callback: (value: string) => void) {
  setTimeout(() => callback('Operación completada ✅'), 2000);
}

const asyncObservable = bindCallback(fakeAsyncOperation);

@Component({
  selector: 'app-bind-callback',
  imports: [],
  template: `<button (click)="run()">Ejecutar tarea</button>
    <p>{{ message() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BindCallbackComponent {
   message = signal('Esperando...');

  run() {
    asyncObservable().subscribe(value => this.message.set(value));
  }

}
