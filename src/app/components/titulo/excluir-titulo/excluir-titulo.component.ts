import {Component, Inject, OnInit} from '@angular/core';
import {Classe} from "../../classe/models/classe";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClasseService} from "../../classe/services/classe.service";
import {first} from "rxjs";
import {Titulo} from "../models/titulo";
import {TituloService} from "../services/titulo.service";

@Component({
  selector: 'app-excluir-titulo',
  templateUrl: './excluir-titulo.component.html',
  styleUrls: ['./excluir-titulo.component.scss']
})
export class ExcluirTituloComponent implements OnInit {

  public titulo: Titulo;

  constructor(
    public dialogRef: MatDialogRef<ExcluirTituloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Titulo,
    private service: TituloService,
  ) {
    this.titulo = data;
  }

  ngOnInit(): void {

  }

  excluirTitulo() {
    console.log(this.titulo)
    this.service.deletar(this.titulo._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }

}
