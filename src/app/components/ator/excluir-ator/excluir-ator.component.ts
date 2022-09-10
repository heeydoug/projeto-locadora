import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ator} from "../models/ator";
import {AtorService} from "../services/ator.service";
import {first} from "rxjs";


@Component({
  selector: 'app-excluir-ator',
  templateUrl: './excluir-ator.component.html',
  styleUrls: ['./excluir-ator.component.scss']
})
export class ExcluirAtorComponent implements OnInit {

  public ator: Ator;

  constructor(
    public dialogRef: MatDialogRef<ExcluirAtorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ator,
    private service: AtorService,


  ) {
    this.ator = data;
  }

  ngOnInit(): void {

  }

  excluirAtor() {
    console.log(this.ator)
    this.service.deletar(this.ator._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }
}
