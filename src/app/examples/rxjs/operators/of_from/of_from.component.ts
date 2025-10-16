import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  imports: [CommonModule],
   template: `
    <h3>Productos disponibles</h3>
    <ul>
      <li *ngFor="let item of productos()">{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
}) 
export class OfFromComponent {
  productos = signal<string[]>([]);

  constructor() {
    const productosOf$ = of('Teclado', 'Mouse', 'Monitor');
    const productosFrom$ = from(['Webcam', 'Audífonos']);

    productosOf$.subscribe(val => this.productos.update(list => [...list, val]));
    productosFrom$.subscribe(val => this.productos.update(list => [...list, val]));
  }
}
