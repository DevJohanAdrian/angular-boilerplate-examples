import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY, NEVER, throwError } from 'rxjs';
import { signal } from '@angular/core';

@Component({
  selector: 'app-empty-never-throw-error',
  imports: [],
  template: `<h3>Estado del Observable</h3>
    <button (click)="probar('empty')">Probar EMPTY</button>
    <button (click)="probar('never')">Probar NEVER</button>
    <button (click)="probar('error')">Probar throwError</button>
    <p>{{ estado() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyNeverThrowErrorComponent {
  estado = signal('Esperando...');

  probar(tipo: 'empty' | 'never' | 'error') {
    this.estado.set('Ejecutando...');

    const source =
      tipo === 'empty'
        ? EMPTY
        : tipo === 'never'
        ? NEVER
        : throwError(() => new Error('Algo salió mal'));

    source.subscribe({
      next: () => this.estado.set('Valor recibido'),
      error: err => this.estado.set(err.message),
      complete: () => this.estado.set('Completado ✅'),
    });
 }
}
