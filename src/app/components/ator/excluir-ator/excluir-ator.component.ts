import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-excluir-ator',
  templateUrl: './excluir-ator.component.html',
  styleUrls: ['./excluir-ator.component.scss']
})
export class ExcluirAtorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcluirAtorComponent>
  ) { }

  ngOnInit(): void {
  }

  excluirAtor() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }
}
