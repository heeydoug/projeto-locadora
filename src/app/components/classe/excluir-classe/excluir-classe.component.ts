import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-excluir-classe',
  templateUrl: './excluir-classe.component.html',
  styleUrls: ['./excluir-classe.component.scss']
})
export class ExcluirClasseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcluirClasseComponent>
  ) { }

  ngOnInit(): void {
  }

  excluirClasse() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }
}
