import { Component, OnInit } from '@angular/core';
import {Classe} from "../models/classe";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ExcluirClasseComponent} from "../excluir-classe/excluir-classe.component";

@Component({
  selector: 'app-ler-classe',
  templateUrl: './ler-classe.component.html',
  styleUrls: ['./ler-classe.component.scss']
})
export class LerClasseComponent implements OnInit {

  classes: Classe[] = [
    { _id: '1' , nome: 'Teste', data: '19/05/2000', valor: 25 }

  ];
  displayedColumns = ['nome', 'data', 'valor' ,'acoes'];

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editarClasse(){
    this.router.navigate(['/classe/editarClasse'])
  }
  excluirClasse(): void {
    this.dialog.open(ExcluirClasseComponent, {
      width: '400px',
    });
  }


}
