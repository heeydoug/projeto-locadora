import { Component, OnInit } from '@angular/core';
import {Ator} from "../models/ator";
import {AtorService} from "../services/ator.service";
import {Router} from "@angular/router";
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
  displayedColumns = ['nome', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private atorService: AtorService,
    private router: Router)

  {
    this.atores = this.atorService.list();
  }

  ngOnInit(): void {

  }

  editarAtor(){
    this.router.navigate(['/ator/editarAtor'])
  }
  excluirAtor(): void {
    this.dialog.open(ExcluirAtorComponent, {
      width: '400px',
    });
  }
}
