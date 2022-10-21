import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AtorService} from "../../ator/services/ator.service";
import {NonNullableFormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ClienteService} from "../services/cliente.service";
import {Cliente} from "../models/cliente";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    numeroInscricao: [0],
    nome: [''],
    dataNascimento: [''],
    sexo: [''],
    estahAtivo: ['']

  });

  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {

    const cliente: Cliente = this.route.snapshot.data['cliente'];
    console.log(cliente);

    this.form.patchValue({
      _id: cliente._id,
      numeroInscricao: cliente.numeroInscricao,
      nome: cliente.nome,
      dataNascimento: cliente.dataNascimento,
      sexo: cliente.sexo,
      estahAtivo: cliente.estahAtivo

    });

  }

  editarCliente(): void{
    this.service.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Cliente editado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar cliente.", '', {duration: 5000});
  }

}
