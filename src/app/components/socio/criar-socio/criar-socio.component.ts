import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Classe} from "../../classe/models/classe";
import {Cliente} from "../../cliente/models/cliente";
import {Router} from "@angular/router";
import {TituloService} from "../../titulo/services/titulo.service";
import {DiretorService} from "../../diretor/services/diretor.service";
import {AtorService} from "../../ator/services/ator.service";
import {ClasseService} from "../../classe/services/classe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {SocioService} from "../services/socio.service";
import {ClienteService} from "../../cliente/services/cliente.service";

@Component({
  selector: 'app-criar-socio',
  templateUrl: './criar-socio.component.html',
  styleUrls: ['./criar-socio.component.scss']
})
export class CriarSocioComponent implements OnInit {

  form: FormGroup;

  dependentes: Cliente[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private socioService: SocioService,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {

    this.form = this.formBuilder.group({
      numeroInscricao: [null],
      nome: [null],
      cpf: [null],
      dataNascimento: [null],
      endereco: [null],
      telefone: [null],
      sexo: [null],
      estahAtivo: [null],
      dependentes: [null]
    });

  }

  ngOnInit(): void {
    this.clienteService.list().subscribe(clientes =>{
      this.dependentes = clientes;
    });
  }

  criarSocio(): void{
    this.socioService.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Sócio cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar sócio.", '', {duration: 5000});
  }


}
