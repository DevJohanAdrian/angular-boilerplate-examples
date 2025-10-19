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
    path: 'userList',
    loadComponent: () =>
      import('./examples/rxjs/userListComponent/userList.component').then(
        (m) => m.UserList,
      ),
  },
  {
    path: 'ofFrom',
    loadComponent: () =>
      import('./examples/rxjs/operators/of_from/of_from.component').then(
        (m) => m.OfFromComponent,
      ),
  },
  {
    path: 'intervalTimer',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/interval_timer/interval_timer.component'
      ).then((m) => m.IntervalTimerComponent),
  },
  {
    path: 'range',
    loadComponent: () =>
      import('./examples/rxjs/operators/range/range.component').then(
        (m) => m.RangeComponent,
      ),
  },
  {
    path: 'deferAjax',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/defer_ajax/defer_ajax.component'
      ).then((m) => m.DeferAjaxComponent),
  }
];
