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
      import('./examples/rxjs/operators/creation/of_from/of_from.component').then(
        (m) => m.OfFromComponent,
      ),
  },
  {
    path: 'intervalTimer',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/creation/interval_timer/interval_timer.component'
      ).then((m) => m.IntervalTimerComponent),
  },
  {
    path: 'range',
    loadComponent: () =>
      import('./examples/rxjs/operators/creation/range/range.component').then(
        (m) => m.RangeComponent,
      ),
  },
  {
    path: 'deferAjax',
    loadComponent: () =>
      import('./examples/rxjs/operators/creation/defer_ajax/defer_ajax.component').then(
        (m) => m.DeferAjaxComponent,
      ),
  },
  {
    path: 'emptyNeverThrowError',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/creation/empty_never_throwError/empty_never_throwError.component'
      ).then((m) => m.EmptyNeverThrowErrorComponent),
  },
  {
    path: 'bindCallback',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/creation/bindCallback/bindCallback.component'
      ).then((m) => m.BindCallbackComponent),
  },
  //  {
  //   path: 'bindNodeCallback', loadComponent: () =>
  //     import(
  //       './examples/rxjs/operators/bindNodeCallback/bindNodeCallback.component'
  //     ).then((m) => m.BindNodeCallbackComponent),
  //  },
  {
    path: 'fromtEvent',
    loadComponent: () =>
      import('./examples/rxjs/operators/creation/fromEvent/fromEvent.component').then(
        (m) => m.FromEventComponent,
      ),
  },
  {
    path: 'fromEventPattern',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/creation/fromEventPattern/fromEventPattern.component'
      ).then((m) => m.FromEventPatternComponent),
  },
  {
    path: 'generate',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/creation/generate/generate.component'
      ).then((m) => m.GenerateComponent),
  },
  {
    path: 'lif',
    loadComponent: () =>
      import('./examples/rxjs/operators/creation/lif/lif.component').then(
        (m) => m.LifComponent,
      ),
  },
  {
    path: 'combineLatest',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/combination/combineLastest/combineLastest.component'
      ).then((m) => m.CombineLatestDemoComponent),

  },
  {
    path: 'combineLatestAll', loadComponent: () =>
      import(
        './examples/rxjs/operators/combination/combineLatestAll/combineLatestAll.component'
      ).then((m) => m.CombineLatestAllComponent),
  },
  {
    path: 'concat',
    loadComponent: () =>
      import(
        './examples/rxjs/operators/combination/concat/concat.component'
      ).then((m) => m.ConcatComponent),
  }
];
