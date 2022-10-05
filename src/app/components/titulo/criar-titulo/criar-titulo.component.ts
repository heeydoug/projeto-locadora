import { Component, OnInit } from '@angular/core';
import {Titulo} from "../models/titulo";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ClasseService} from "../../classe/services/classe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {Diretor} from "../../diretor/models/diretor";
import {Ator} from "../../ator/models/ator";
import {Classe} from "../../classe/models/classe";
import {DiretorService} from "../../diretor/services/diretor.service";
import {AtorService} from "../../ator/services/ator.service";
import {TituloService} from "../services/titulo.service";

@Component({
  selector: 'app-criar-titulo',
  templateUrl: './criar-titulo.component.html',
  styleUrls: ['./criar-titulo.component.scss']
})
export class CriarTituloComponent implements OnInit {

  form: FormGroup;

  diretores: Diretor[] = [];
  atores: Ator[] = [];
  classes:Classe[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tituloService: TituloService,
    private diretorService: DiretorService,
    private atorService: AtorService,
    private classeService: ClasseService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      ano: [null],
      sinopse: [null],
      categoria: [null],
      atores: [null],
      diretor: [null],
      classe: [null],
    });
  }

  ngOnInit(): void {

    this.diretorService.list().subscribe(diretores =>{
      this.diretores = diretores;
    });
    this.classeService.list().subscribe(classes =>{
      this.classes = classes;
    });
    this.atorService.list().subscribe(atores =>{
      this.atores = atores;
    });

  }

  criarTitulo(): void{
    this.tituloService.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Título cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar título.", '', {duration: 5000});
  }

}
