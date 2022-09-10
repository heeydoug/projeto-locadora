import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ClasseService} from "../services/classe.service";

@Component({
  selector: 'app-criar-classe',
  templateUrl: './criar-classe.component.html',
  styleUrls: ['./criar-classe.component.scss']
})
export class CriarClasseComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ClasseService,
    private snackBar: MatSnackBar,
    private location: Location)
  {
    this.form = this.formBuilder.group({
      nome: [null],
      data: [null],
      valor: [null]
    });
  }

  ngOnInit(): void {
  }

  criarClasse(): void{
    this.service.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Classe cadastrada com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar classe.", '', {duration: 5000});
  }
}
