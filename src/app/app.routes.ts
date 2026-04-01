import { Routes } from '@angular/router';
import { Dashboard } from '../dashboard/containers/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: '**', redirectTo: '' },
];
