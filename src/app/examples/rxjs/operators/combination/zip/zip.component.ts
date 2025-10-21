import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-zip',
  imports: [],
  template: `<p>zip works!</p>`,
  styleUrl: './zip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZipComponent { }
