// import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
// import { bindNodeCallback } from 'rxjs';

// function fakeNodeFunction(callback: (err: Error | null, result?: string) => void) {
//   setTimeout(() => {
//     if (Math.random() > 0.5) callback(null, 'Éxito 🎉');
//     else callback(new Error('Fallo ❌'));
//   }, 1500);
// }

// const nodeObservable = bindNodeCallback(fakeNodeFunction);

// @Component({
//   selector: 'app-bind-node-callback',
//   imports: [],
//   template: `<button (click)="start()">Ejecutar</button>
//     <p>{{ message() }}</p>`,
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// // Parecido a bindCallback, pero pensado para funciones de estilo Node.js que reciben (error, result).
// export class BindNodeCallbackComponent { 
// //  message = signal<string>('Listo para comenzar');

// //   start() {
// //     nodeObservable().subscribe({
// //       next: result => this.message.set(result ?? ''),
// //       error: err => this.message.set(err.message)
// //     });
// //   }
// }
