import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  imports: [],
  template: ` <h2>Operadores de creación en acción</h2>
    <p>of(): {{ ofValues }}</p>
    <p>from(): {{ fromValues }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfFromComponent {
  ofValues: string = '';
  fromValues: string = '';

  constructor() {
    of(1, 2, 3).subscribe((value) => (this.ofValues += value + ' '));

    from([4, 5, 6]).subscribe((value) => (this.fromValues += value + ' '));
  }
}
