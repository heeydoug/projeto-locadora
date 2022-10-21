import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from "@angular/material/card";
import { CrudAtorComponent } from './views/crud-ator/crud-ator.component';
import { CrudClasseComponent } from './views/crud-classe/crud-classe.component';
import { CrudDiretorComponent } from './views/crud-diretor/crud-diretor.component';
import { CriarAtorComponent } from './components/ator/criar-ator/criar-ator.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CriarClasseComponent } from './components/classe/criar-classe/criar-classe.component';
import { CriarDiretorComponent } from './components/diretor/criar-diretor/criar-diretor.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { LerAtorComponent } from './components/ator/ler-ator/ler-ator.component';
import { ExcluirAtorComponent } from './components/ator/excluir-ator/excluir-ator.component';
import { EditarAtorComponent } from './components/ator/editar-ator/editar-ator.component';
import { ExcluirClasseComponent } from './components/classe/excluir-classe/excluir-classe.component';
import { EditarClasseComponent } from './components/classe/editar-classe/editar-classe.component';
import { LerClasseComponent } from './components/classe/ler-classe/ler-classe.component';
import { EditarDiretorComponent } from './components/diretor/editar-diretor/editar-diretor.component';
import { ExcluirDiretorComponent } from './components/diretor/excluir-diretor/excluir-diretor.component';
import { LerDiretorComponent } from './components/diretor/ler-diretor/ler-diretor.component'
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CrudTituloComponent } from './views/crud-titulo/crud-titulo.component';
import { CriarTituloComponent } from './components/titulo/criar-titulo/criar-titulo.component';
import { EditarTituloComponent } from './components/titulo/editar-titulo/editar-titulo.component';
import { ExcluirTituloComponent } from './components/titulo/excluir-titulo/excluir-titulo.component';
import { LerTituloComponent } from './components/titulo/ler-titulo/ler-titulo.component';
import {MatSelectModule} from "@angular/material/select";
import { CriarItemComponent } from './components/item/criar-item/criar-item.component';
import { EditarItemComponent } from './components/item/editar-item/editar-item.component';
import { ExcluirItemComponent } from './components/item/excluir-item/excluir-item.component';
import { LerItemComponent } from './components/item/ler-item/ler-item.component';
import { CrudItemComponent } from './views/crud-item/crud-item.component';
import { CriarClienteComponent } from './components/cliente/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { LerClienteComponent } from './components/cliente/ler-cliente/ler-cliente.component';
import { ExcluirClienteComponent } from './components/cliente/excluir-cliente/excluir-cliente.component';
import { CriarSocioComponent } from './components/socio/criar-socio/criar-socio.component';
import { EditarSocioComponent } from './components/socio/editar-socio/editar-socio.component';
import { LerSocioComponent } from './components/socio/ler-socio/ler-socio.component';
import { ExcluirSocioComponent } from './components/socio/excluir-socio/excluir-socio.component';
import { CrudClienteComponent } from './views/crud-cliente/crud-cliente.component';
import { CrudSocioComponent } from './views/crud-socio/crud-socio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    CrudAtorComponent,
    CrudClasseComponent,
    CrudDiretorComponent,
    CriarAtorComponent,
    CriarClasseComponent,
    CriarDiretorComponent,
    LerAtorComponent,
    ExcluirAtorComponent,
    EditarAtorComponent,
    ExcluirClasseComponent,
    EditarClasseComponent,
    LerClasseComponent,
    EditarDiretorComponent,
    ExcluirDiretorComponent,
    LerDiretorComponent,
    CrudTituloComponent,
    CriarTituloComponent,
    EditarTituloComponent,
    ExcluirTituloComponent,
    LerTituloComponent,
    CriarItemComponent,
    EditarItemComponent,
    ExcluirItemComponent,
    LerItemComponent,
    CrudItemComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    LerClienteComponent,
    ExcluirClienteComponent,
    CriarSocioComponent,
    EditarSocioComponent,
    LerSocioComponent,
    ExcluirSocioComponent,
    CrudClienteComponent,
    CrudSocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
