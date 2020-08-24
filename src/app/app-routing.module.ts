import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPokemonComponent } from './layout/lista-pokemon/lista-pokemon.component';
import { DetalhePokemonComponent } from './layout/detalhe-pokemon/detalhe-pokemon.component';
import { InicioComponent } from './layout/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'lista-pokemon', component: ListaPokemonComponent
  },
  {
    path: 'detalhe-pokemon/:id', component: DetalhePokemonComponent
  },
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
