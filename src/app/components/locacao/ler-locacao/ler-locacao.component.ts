import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Locacao} from "../models/locacao";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {LocacaoService} from "../services/locacao.service";
import {ExcluirLocacaoComponent} from "../excluir-locacao/excluir-locacao.component";

@Component({
  selector: 'app-ler-locacao',
  templateUrl: './ler-locacao.component.html',
  styleUrls: ['./ler-locacao.component.scss']
})
export class LerLocacaoComponent implements OnInit {

  locacoes: Observable<Locacao[]>;

  displayedColumns = ['id', 'dtLocacao', 'dtDevolucaoPrevista', 'dtDevolucaoEfetiva',
    'valorCobrado', 'multaCobrada', 'item', 'cliente', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private locacaoService: LocacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.locacoes = this.locacaoService.list();
  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.locacoes = this.locacaoService.list();
    });
  }

  editarLocacao(locacao: Locacao){
    this.router.navigate(['editarLocacao', locacao._id], {relativeTo: this.route});
  }
  excluirLocacao(row: Locacao): void {
    this.dialog.open(ExcluirLocacaoComponent, {
      width: '400px',
      data: row
    });
  }

}
