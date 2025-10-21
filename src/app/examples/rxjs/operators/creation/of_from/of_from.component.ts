import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  imports: [CommonModule],
   template: `
    <h3>Productos disponibles signals</h3>
    <ul>
      <li *ngFor="let item of products()">{{ item }}</li>
    </ul>
    <hr>
     <h3>Productos disponibles without signals</h3>
    <ul>
      <li *ngFor="let item of products2">{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
}) 
export class OfFromComponent {
  products = signal<string[]>([]);
  products2 : string[] = [];

  constructor() {
    //signals
    const productosOf$ = of('Teclado', 'Mouse', 'Monitor');
    const productosFrom$ = from(['Webcam', 'Audífonos']);

    productosOf$.subscribe(val => this.products.update(list => [...list, val]));
    productosFrom$.subscribe(val => this.products.update(list => [...list, val]));

    //Without signals
    const productosOf2$ = of('Teclado2', 'Mouse2', 'Monitor2');
    const productosFrom2$ = from(['Webcam2', 'Audífonos2']);

    productosFrom2$.subscribe( val => this.products2 = [...this.products2, val]);
    productosOf2$.subscribe( val => this.products2 = [...this.products2, val]);
  }
}
