import {Component, Inject, OnInit} from '@angular/core';
import {Titulo} from "../../titulo/models/titulo";
import {Locacao} from "../models/locacao";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TituloService} from "../../titulo/services/titulo.service";
import {LocacaoService} from "../services/locacao.service";
import {first} from "rxjs";

@Component({
  selector: 'app-excluir-locacao',
  templateUrl: './excluir-locacao.component.html',
  styleUrls: ['./excluir-locacao.component.scss']
})
export class ExcluirLocacaoComponent implements OnInit {

  public locacao: Locacao;

  constructor(public dialogRef: MatDialogRef<ExcluirLocacaoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Locacao,
              private service: LocacaoService,
  ) {
    this.locacao = data;
  }
  ngOnInit(): void {
  }

  excluirLocacao() {
    console.log(this.locacao)
    this.service.deletar(this.locacao._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }

}
