import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@st/feature/vehicles').then((m) => m.vehiclesFeatureRoutes),
  },
];
