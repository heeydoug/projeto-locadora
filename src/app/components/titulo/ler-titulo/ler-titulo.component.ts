import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Titulo} from "../models/titulo";
import {Observable} from "rxjs";
import {TituloService} from "../services/titulo.service";
import {ExcluirTituloComponent} from "../excluir-titulo/excluir-titulo.component";

@Component({
  selector: 'app-ler-titulo',
  templateUrl: './ler-titulo.component.html',
  styleUrls: ['./ler-titulo.component.scss']
})
export class LerTituloComponent implements OnInit {

  titulos: Observable<Titulo[]>;

  displayedColumns = ['id', 'nome', 'ano', 'sinopse', 'categoria', 'diretor', 'classe', 'ator', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private tituloService: TituloService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.titulos = this.tituloService.list();

  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.titulos = this.tituloService.list();
    });
  }

  editarTitulo(titulo: Titulo){
    this.router.navigate(['editarTitulo', titulo._id], {relativeTo: this.route});
  }
  excluirTitulo(row: Titulo): void {
    this.dialog.open(ExcluirTituloComponent, {
      width: '400px',
      data: row
    });
  }

}
