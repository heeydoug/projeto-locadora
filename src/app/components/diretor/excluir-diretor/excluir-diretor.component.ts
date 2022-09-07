import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-excluir-diretor',
  templateUrl: './excluir-diretor.component.html',
  styleUrls: ['./excluir-diretor.component.scss']
})
export class ExcluirDiretorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcluirDiretorComponent>
  ) { }

  ngOnInit(): void {
  }

  excluirDiretor() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }
}
