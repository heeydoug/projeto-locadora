import {Component, Inject, OnInit} from '@angular/core';
import {Cliente} from "../models/cliente";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClienteService} from "../services/cliente.service";
import {first} from "rxjs";

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.scss']
})
export class ExcluirClienteComponent implements OnInit {

  public cliente: Cliente;

  constructor(
    public dialogRef: MatDialogRef<ExcluirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private service: ClienteService,
  ) {
    this.cliente = data;
  }

  ngOnInit(): void {
  }

  excluirCliente() {
    console.log(this.cliente)
    this.service.deletar(this.cliente._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);
  }

}
