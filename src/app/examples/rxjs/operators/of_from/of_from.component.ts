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
  users: string[] = [];


  constructor() {
    // examples of y from
   this.user$.subscribe(value => {
     console.log('of value:', value);
    }
 
  }
}
