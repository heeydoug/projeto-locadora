import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ExcluirDiretorComponent} from "../excluir-diretor/excluir-diretor.component";
import {Diretor} from "../models/diretor";

@Component({
  selector: 'app-ler-diretor',
  templateUrl: './ler-diretor.component.html',
  styleUrls: ['./ler-diretor.component.scss']
})
export class LerDiretorComponent implements OnInit {

  diretores: Diretor[] = [
    { _id: '1', nome: 'Douglas'}
  ];
  displayedColumns = ['nome', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  editarDiretor(){
    this.router.navigate(['/diretor/editarDiretor'])
  }
  excluirDiretor(): void {
    this.dialog.open(ExcluirDiretorComponent, {
      width: '400px',
    });
  }

}
