import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Cliente} from "../../cliente/models/cliente";
import {Socio} from "../models/socio";
import {MatDialog} from "@angular/material/dialog";
import {TituloService} from "../../titulo/services/titulo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SocioService} from "../services/socio.service";
import {Titulo} from "../../titulo/models/titulo";
import {ExcluirTituloComponent} from "../../titulo/excluir-titulo/excluir-titulo.component";
import {ExcluirSocioComponent} from "../excluir-socio/excluir-socio.component";

@Component({
  selector: 'app-ler-socio',
  templateUrl: './ler-socio.component.html',
  styleUrls: ['./ler-socio.component.scss']
})
export class LerSocioComponent implements OnInit {

  socios: Observable<Socio[]>;
  displayedColumns = ['id', 'numeroInscricao', 'nome', 'cpf', 'dataNascimento', 'endereco', 'telefone', 'sexo', 'estahAtivo', 'dependentes', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private socioService: SocioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.socios = this.socioService.list();
  }

  ngOnInit(): void {

    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.socios = this.socioService.list();
    });

  }

  editarSocio(socio: Socio){
    this.router.navigate(['editarSocio', socio._id], {relativeTo: this.route});
  }
  excluirSocio(row: Socio): void {
    this.dialog.open(ExcluirSocioComponent, {
      width: '400px',
      data: row
    });
  }

}
