import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'counterRxJS',
    loadComponent: () =>
      import('./examples/rxjs/counterRxJS/counterRxJS.component').then(
        (m) => m.CounterRxJSComponent,
      ),
  },
  {
    path : 'userList',
    loadComponent: () =>
      import('./examples/rxjs/userListComponent/userList.component').then(
        (m) => m.UserList,
      ),
  }
];
