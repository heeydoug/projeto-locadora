import { Component, OnInit } from '@angular/core';
import {Ator} from "../models/ator";
import {AtorService} from "../services/ator.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ExcluirAtorComponent} from "../excluir-ator/excluir-ator.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-ler-ator',
  templateUrl: './ler-ator.component.html',
  styleUrls: ['./ler-ator.component.scss']
})
export class LerAtorComponent implements OnInit {

  atores: Observable<Ator[]>;
  displayedColumns = ['id','nome', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private atorService: AtorService,
    private router: Router,
    private route: ActivatedRoute)

  {
    this.atores = this.atorService.list();
  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.atores = this.atorService.list();
    });
  }

  editarAtor(ator: Ator ){
    this.router.navigate(['editarAtor', ator._id], {relativeTo: this.route});
  }
  excluirAtor(row: Ator): void {
    this.dialog.open(ExcluirAtorComponent, {
      width: '400px',
      data: row
    });
  }
}
