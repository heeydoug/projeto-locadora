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
import {FormsModule} from "@angular/forms";
import { CriarClasseComponent } from './components/classe/criar-classe/criar-classe.component';
import { CriarDiretorComponent } from './components/diretor/criar-diretor/criar-diretor.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
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
    LerDiretorComponent
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
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
