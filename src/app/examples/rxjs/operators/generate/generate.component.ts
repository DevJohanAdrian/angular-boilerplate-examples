import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { generate } from 'rxjs';

interface GenerateOptions {
      initialState: number;
      condition: (x: number) => boolean;
      iterate: (x: number) => number;
      resultSelector: (x: number) => string;
    }

@Component({
  selector: 'app-generate',
  imports: [],
  template: `<h3>Secuencia generada:</h3>
    <p>{{ sequence() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenerateComponent {
   sequence = signal<string>('');

  constructor() {
    

    const config: GenerateOptions = {
      initialState: 0,
      condition: (x: number) => x <= 5,
      iterate: (x: number) => x + 1,
      resultSelector: (x: number) => `#${x} `
    };

    const observable = generate<string, number>(config);

    observable.subscribe(value => this.sequence.update(v => v + value));
  }

 }
