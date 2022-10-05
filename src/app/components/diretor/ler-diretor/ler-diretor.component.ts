import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ExcluirDiretorComponent} from "../excluir-diretor/excluir-diretor.component";
import {Diretor} from "../models/diretor";
import {Observable} from "rxjs";
import {DiretorService} from "../services/diretor.service";

@Component({
  selector: 'app-ler-diretor',
  templateUrl: './ler-diretor.component.html',
  styleUrls: ['./ler-diretor.component.scss']
})
export class LerDiretorComponent implements OnInit {

  diretores: Observable<Diretor[]>;
  displayedColumns = ['id', 'nome', 'ano', 'sinopse', 'categoria', 'diretor', 'classe', 'atores','acoes'];

  constructor(
    private dialog: MatDialog,
    private diretorService: DiretorService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.diretores = this.diretorService.list();
  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.diretores = this.diretorService.list();
    });
  }

  editarDiretor(diretor: Diretor){
    this.router.navigate(['editarDiretor', diretor._id], {relativeTo: this.route});
  }
  excluirDiretor(row: Diretor): void {
    this.dialog.open(ExcluirDiretorComponent, {
      width: '400px',
      data: row
    });
  }

}
