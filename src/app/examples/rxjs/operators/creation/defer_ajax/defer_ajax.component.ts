import { ChangeDetectionStrategy, Component } from '@angular/core';
import { signal } from '@angular/core';
import { defer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-ajax',
  imports: [CommonModule],
  template: `<h3>Usuarios</h3>
    <button (click)="cargarUsuarios()">Cargar usuarios</button>
    <ul>
      <li *ngFor="let user of usuarios()">{{ user }}</li>
    </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Simular una carga de usuarios desde una API (falsa) que solo se ejecuta cuando el usuario hace clic.
// defer permite crear el observable en el momento de la suscripción.
// ajax realiza solicitudes HTTP y devuelve un observable.

// Si el observable se creara al inicio, la petición AJAX se haría apenas cargue el componente.
// Pero al usar defer, la petición solo se ejecuta cuando el usuario presiona el botón “Cargar usuarios”.
export class DeferAjaxComponent {
  usuarios = signal<string[]>([]);

  cargarUsuarios() {
    const usuarios$ = defer(() =>
      ajax.getJSON<any[]>('https://jsonplaceholder.typicode.com/users'),
    ).pipe(
      map((users) => users.map((user) => user.name)),
    );

    usuarios$.subscribe((data) => this.usuarios.set(data));
  }
}
