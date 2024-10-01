import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'diretorios'},
  { path:'diretorios',
    loadChildren: () => import('./diretorios/diretorios.module').then(m => m.DiretoriosModule)
  }
];
