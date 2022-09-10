import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Diretor} from "../models/diretor";
import {DiretorService} from "../services/diretor.service";
import {first} from "rxjs";

@Component({
  selector: 'app-excluir-diretor',
  templateUrl: './excluir-diretor.component.html',
  styleUrls: ['./excluir-diretor.component.scss']
})
export class ExcluirDiretorComponent implements OnInit {

  public diretor: Diretor;

  constructor(
    public dialogRef: MatDialogRef<ExcluirDiretorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Diretor,
    private service: DiretorService,
  ) {
    this.diretor = data;
  }

  ngOnInit(): void {

  }

  excluirDiretor() {
    console.log(this.diretor)
    this.service.deletar(this.diretor._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }
}
