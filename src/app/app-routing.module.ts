import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import {CrudAtorComponent} from "./views/crud-ator/crud-ator.component";
import {CrudClasseComponent} from "./views/crud-classe/crud-classe.component";
import {CrudDiretorComponent} from "./views/crud-diretor/crud-diretor.component";
import {CriarAtorComponent} from "./components/ator/criar-ator/criar-ator.component";
import {CriarDiretorComponent} from "./components/diretor/criar-diretor/criar-diretor.component";
import {CriarClasseComponent} from "./components/classe/criar-classe/criar-classe.component";
import {EditarAtorComponent} from "./components/ator/editar-ator/editar-ator.component";
import {ExcluirAtorComponent} from "./components/ator/excluir-ator/excluir-ator.component";
import {ExcluirClasseComponent} from "./components/classe/excluir-classe/excluir-classe.component";
import {EditarClasseComponent} from "./components/classe/editar-classe/editar-classe.component";
import {EditarDiretorComponent} from "./components/diretor/editar-diretor/editar-diretor.component";
import {ExcluirDiretorComponent} from "./components/diretor/excluir-diretor/excluir-diretor.component";
import {AtorResolver} from "./components/ator/guards/ator.resolver";
import {DiretorResolver} from "./components/diretor/guards/diretor.resolver";
import {ClasseResolver} from "./components/classe/guards/classe.resolver";

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
    component: CriarAtorComponent,
    resolve: { ator: AtorResolver }
  },

  {
    path: 'ator/editarAtor/:id',
    component: EditarAtorComponent,
    resolve: { ator: AtorResolver }
  },

  {
    path: 'ator/excluirAtor',
    component: ExcluirAtorComponent
  },

  {
    path: 'classe',
    component: CrudClasseComponent
  },

  {
    path: 'classe/criarClasse',
    component: CriarClasseComponent,
    resolve: { classe: ClasseResolver }
  },

  {
    path: 'classe/editarClasse/:id',
    component: EditarClasseComponent,
    resolve: { classe: ClasseResolver }
  },

  {
    path: 'classe/excluirClasse',
    component: ExcluirClasseComponent
  },

  {
    path: 'diretor',
    component: CrudDiretorComponent
  },

  {
    path: 'diretor/criarDiretor',
    component: CriarDiretorComponent,
    resolve: { diretor: DiretorResolver }
  },

  {
    path: 'diretor/editarDiretor/:id',
    component: EditarDiretorComponent,
    resolve: { diretor: DiretorResolver }
  },

  {
    path: 'diretor/excluirDiretor',
    component: ExcluirDiretorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
