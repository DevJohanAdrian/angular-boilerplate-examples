import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule],
  template: ` <h2>Usuarios</h2>
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  users: any[] = [];

  ngOnInit() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          console.log('Datos recibidos:', data);
          this.users = data; // 👈 Actualiza la lista en la plantilla
          this.cdr.markForCheck(); // 👈 Notifica a Angular que hay cambios
        },
        error: (err) => console.error('Error al cargar usuarios:', err),
        complete: () => console.log('Carga completada'),
      });
  }
}
