import { ChangeDetectionStrategy, Component, signal, inject, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [],
  template: `<p>fromEvent works!</p>  
  <button id="myButton">Haz clic en mí</button>
  <p>Contador de clics: {{ count() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromEventComponent { 
 count = signal<number>(0);
  private el = inject(ElementRef);

  ngOnInit() {
    const button = this.el.nativeElement.querySelector('#myButton');
    
    fromEvent(button, 'click').subscribe(() => {
      this.count.update(n => n + 1);
    });
  }

}
