import { Component, OnInit } from '@angular/core';
import {Classe} from "../models/classe";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ExcluirClasseComponent} from "../excluir-classe/excluir-classe.component";
import {Observable} from "rxjs";
import {AtorService} from "../../ator/services/ator.service";
import {ClasseService} from "../services/classe.service";

@Component({
  selector: 'app-ler-classe',
  templateUrl: './ler-classe.component.html',
  styleUrls: ['./ler-classe.component.scss']
})
export class LerClasseComponent implements OnInit {

  classes: Observable<Classe[]>;
  displayedColumns = ['id','nome', 'data', 'valor' ,'acoes'];

  constructor(
    private dialog: MatDialog,
    private classeService: ClasseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.classes = this.classeService.list();
  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.classes = this.classeService.list();
    });
  }

  editarClasse(classe: Classe){
    this.router.navigate(['editarClasse', classe._id], {relativeTo: this.route});
  }
  excluirClasse(classe: Classe): void {
    this.dialog.open(ExcluirClasseComponent, {
      width: '400px',
      data: classe
    });
  }


}
