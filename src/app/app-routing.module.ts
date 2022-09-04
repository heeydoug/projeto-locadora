import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import {CrudAtorComponent} from "./views/crud-ator/crud-ator.component";
import {CrudClasseComponent} from "./views/crud-classe/crud-classe.component";
import {CrudDiretorComponent} from "./views/crud-diretor/crud-diretor.component";
import {CriarAtorComponent} from "./components/ator/criar-ator/criar-ator.component";
import {CriarDiretorComponent} from "./components/diretor/criar-diretor/criar-diretor.component";
import {CriarClasseComponent} from "./components/classe/criar-classe/criar-classe.component";

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },

  {
    path: 'ator',
    component: CrudAtorComponent
  },

  {
    path: 'ator/criarAtor',
    component: CriarAtorComponent
  },

  {
    path: 'classe',
    component: CrudClasseComponent
  },

  {
    path: 'classe/criarClasse',
    component: CriarClasseComponent
  },

  {
    path: 'diretor',
    component: CrudDiretorComponent
  },

  {
    path: 'diretor/criarDiretor',
    component: CriarDiretorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
