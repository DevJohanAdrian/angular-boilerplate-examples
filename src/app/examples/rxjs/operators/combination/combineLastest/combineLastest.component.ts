import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-combine-latest-demo',
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <label for="color">Color:</label>
      <input
        id="color"
        type="text"
        [(ngModel)]="color"
        (input)="onColorChange()"
      />
    </div>
    <div>
      <label for="size">Size:</label>
      <input
        id="size"
        type="text"
        [(ngModel)]="size"
        (input)="onSizeChange()"
      />
    </div>
    <div>
      <p>Combinado: {{ combined }}</p>
    </div>
  `,
})
// Usamos combineLatest para combinar los observables color$ y size$.
// Cada vez que uno de estos valores cambia, combineLatest emite una nueva combinación, y la vista se actualiza con el valor combinado en el DOM.
export class CombineLatestDemoComponent {
  // Variables normales para el binding
  color = 'rojo';
  size = 'M';

  // Subjects para reaccionar a cambios
  private color$ = new BehaviorSubject(this.color);
  private size$ = new BehaviorSubject(this.size);

  combined = '';

  constructor() {
    combineLatest([this.color$, this.size$]).subscribe(([color, size]) => {
      this.combined = `Color: ${color}, Size: ${size}`;
    });
  }

  onColorChange() {
    this.color$.next(this.color);
  }

  onSizeChange() {
    this.size$.next(this.size);
  }
}
