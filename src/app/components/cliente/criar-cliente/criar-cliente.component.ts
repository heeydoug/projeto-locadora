import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ClienteService} from "../services/cliente.service";

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.scss']
})
export class CriarClienteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {

    this.form = this.formBuilder.group({
      numeroInscricao: [null],
      nome: [null],
      dataNascimento: [null],
      sexo: [null],
      estahAtivo: [null]

    });

  }

  ngOnInit(): void {
  }

  criarCliente(): void{
    this.service.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Cliente cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar cliente.", '', {duration: 5000});
  }

}
