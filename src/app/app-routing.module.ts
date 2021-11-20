import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inmueble',
    loadChildren: () => import('./pages/inmueble/inmueble.module').then( m => m.InmueblePageModule)
  },
  {
    path: 'inmueble/:id',
    loadChildren: () => import('./pages/inmueble/inmueble.module').then( m => m.InmueblePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
