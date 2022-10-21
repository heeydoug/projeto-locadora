import { Component, OnInit } from '@angular/core';
import {Diretor} from "../../diretor/models/diretor";
import {Cliente} from "../../cliente/models/cliente";
import {ActivatedRoute, Router} from "@angular/router";
import {ClienteService} from "../../cliente/services/cliente.service";
import {NonNullableFormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {SocioService} from "../services/socio.service";
import {Socio} from "../models/socio";

@Component({
  selector: 'app-editar-socio',
  templateUrl: './editar-socio.component.html',
  styleUrls: ['./editar-socio.component.scss']
})
export class EditarSocioComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    numeroInscricao: [0],
    nome: [''],
    cpf: [''],
    dataNascimento: [''],
    endereco: [''],
    telefone: [''],
    sexo: [''],
    dependentes: this.formBuilder.array(<Cliente[]>[]),
    estahAtivo: ['']

  });

  dependentes: Cliente[] = [];

  constructor(
    private router: Router,
    private socioService: SocioService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.clienteService.list().subscribe(dependentes =>{
      this.dependentes = dependentes;
    });

    const socio: Socio = this.route.snapshot.data['socio'];
    console.log(socio);

    this.form.patchValue({
      _id: socio._id,
      numeroInscricao: socio.numeroInscricao,
      cpf: socio.cpf,
      nome: socio.nome,
      dataNascimento: socio.dataNascimento,
      endereco: socio.endereco,
      telefone: socio.telefone,
      sexo: socio.sexo,
      dependentes: socio.dependentes,
      estahAtivo: socio.estahAtivo

    });

  }

  editarSocio(): void{
    this.socioService.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Sócio editado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar sócio.", '', {duration: 5000});
  }

}
