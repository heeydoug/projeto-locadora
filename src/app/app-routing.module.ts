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
import {CrudTituloComponent} from "./views/crud-titulo/crud-titulo.component";
import {CriarTituloComponent} from "./components/titulo/criar-titulo/criar-titulo.component";
import {EditarTituloComponent} from "./components/titulo/editar-titulo/editar-titulo.component";
import {ExcluirTituloComponent} from "./components/titulo/excluir-titulo/excluir-titulo.component";
import {TituloResolver} from "./components/titulo/guards/titulo.resolver";
import {CrudItemComponent} from "./views/crud-item/crud-item.component";
import {CriarItemComponent} from "./components/item/criar-item/criar-item.component";
import {EditarItemComponent} from "./components/item/editar-item/editar-item.component";
import {ExcluirItemComponent} from "./components/item/excluir-item/excluir-item.component";
import {ItemResolver} from "./components/item/guards/item.resolver";
import {CrudClienteComponent} from "./views/crud-cliente/crud-cliente.component";
import {ClienteResolver} from "./components/cliente/guards/cliente.resolver";
import {CriarClienteComponent} from "./components/cliente/criar-cliente/criar-cliente.component";
import {ExcluirClienteComponent} from "./components/cliente/excluir-cliente/excluir-cliente.component";
import {EditarClienteComponent} from "./components/cliente/editar-cliente/editar-cliente.component";
import {CrudSocioComponent} from "./views/crud-socio/crud-socio.component";
import {CriarSocioComponent} from "./components/socio/criar-socio/criar-socio.component";
import {EditarSocioComponent} from "./components/socio/editar-socio/editar-socio.component";
import {SocioResolver} from "./components/socio/guards/socio.resolver";
import {ExcluirSocioComponent} from "./components/socio/excluir-socio/excluir-socio.component";
import {CriarLocacaoComponent} from "./components/locacao/criar-locacao/criar-locacao.component";
import {CrudLocacaoComponent} from "./views/crud-locacao/crud-locacao.component";
import {LocacaoResolver} from "./components/locacao/guards/locacao.resolver";
import {EditarLocacaoComponent} from "./components/locacao/editar-locacao/editar-locacao.component";
import {ExcluirLocacaoComponent} from "./components/locacao/excluir-locacao/excluir-locacao.component";
import {LoginComponent} from "./views/login/login.component";

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

  {
    path: 'titulo',
    component: CrudTituloComponent
  },

  {
    path: 'titulo/criarTitulo',
    component: CriarTituloComponent,
    resolve: { titulo: TituloResolver }
  },

  {
    path: 'titulo/editarTitulo/:id',
    component: EditarTituloComponent,
    resolve: { titulo: TituloResolver }
  },

  {
    path: 'diretor/excluirTitulo',
    component: ExcluirTituloComponent
  },

  {
    path: 'item',
    component: CrudItemComponent
  },

  {
    path: 'item/criarItem',
    component: CriarItemComponent,
    resolve: {item: ItemResolver}
  },

  {
    path: 'item/editarItem/:id',
    component: EditarItemComponent,
    resolve: {item: ItemResolver}
  },

  {
    path: 'item/excluirItem',
    component: ExcluirItemComponent
  },

  {
    path: 'cliente',
    component: CrudClienteComponent
  },

  {
    path: 'cliente/criarCliente',
    component: CriarClienteComponent,
    resolve: {cliente: ClienteResolver}
  },

  {
    path: 'cliente/editarCliente/:id',
    component: EditarClienteComponent,
    resolve: {cliente: ClienteResolver}
  },

  {
    path: 'cliente/excluirCliente',
    component: ExcluirClienteComponent
  },

  {
    path: 'socio',
    component: CrudSocioComponent
  },

  {
    path: 'socio/criarSocio',
    component: CriarSocioComponent,
    resolve: {socio: SocioResolver}
  },

  {
    path: 'socio/editarSocio/:id',
    component: EditarSocioComponent,
    resolve: {socio: SocioResolver}
  },

  {
    path: 'socio/excluirSocio',
    component: ExcluirSocioComponent
  },

  {
    path: 'locacao',
    component: CrudLocacaoComponent
  },

  {
    path: 'locacao/criarLocacao',
    component: CriarLocacaoComponent,
    resolve: {locacao: LocacaoResolver}
  },
  {
    path: 'locacao/editarLocacao/:id',
    component: EditarLocacaoComponent,
    resolve: {locacao: LocacaoResolver}
  },

  {
    path: 'locacao/excluirLocacao',
    component: ExcluirLocacaoComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
