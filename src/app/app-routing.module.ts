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
    path: 'o-telefone-preto',
    loadChildren: () => import('./o-telefone-preto/o-telefone-preto.module').then( m => m.OTelefonePretoPageModule)
  },  {
    path: 'jujutsu-kaisen',
    loadChildren: () => import('./jujutsu-kaisen/jujutsu-kaisen.module').then( m => m.JujutsuKaisenPageModule)
  },
  {
    path: 'velozes-e-furiosos',
    loadChildren: () => import('./velozes-e-furiosos/velozes-e-furiosos.module').then( m => m.VelozesEFuriososPageModule)
  },
  {
    path: 'crepusculo-eclipse',
    loadChildren: () => import('./crepusculo-eclipse/crepusculo-eclipse.module').then( m => m.CrepusculoEclipsePageModule)
  },
  {
    path: 'viuva-negra',
    loadChildren: () => import('./viuva-negra/viuva-negra.module').then( m => m.ViuvaNegraPageModule)
  },
  {
    path: 'o-regresso',
    loadChildren: () => import('./o-regresso/o-regresso.module').then( m => m.ORegressoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
