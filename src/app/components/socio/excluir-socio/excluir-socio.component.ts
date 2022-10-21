import {Component, Inject, OnInit} from '@angular/core';
import {Cliente} from "../../cliente/models/cliente";
import {Socio} from "../models/socio";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClienteService} from "../../cliente/services/cliente.service";
import {SocioService} from "../services/socio.service";
import {first} from "rxjs";

@Component({
  selector: 'app-excluir-socio',
  templateUrl: './excluir-socio.component.html',
  styleUrls: ['./excluir-socio.component.scss']
})
export class ExcluirSocioComponent implements OnInit {

  public socio: Socio;

  constructor(
    public dialogRef: MatDialogRef<ExcluirSocioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Socio,
    private service: SocioService,
  ) {
    this.socio = data;
  }

  ngOnInit(): void {
  }

  excluirSocio() {
    console.log(this.socio)
    this.service.deletar(this.socio._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);
  }

}
