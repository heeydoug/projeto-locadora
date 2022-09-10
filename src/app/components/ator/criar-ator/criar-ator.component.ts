import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AtorService} from "../services/ator.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-criar-ator',
  templateUrl: './criar-ator.component.html',
  styleUrls: ['./criar-ator.component.scss']
})
export class CriarAtorComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AtorService,
    private snackBar: MatSnackBar,
    private location: Location) {

    this.form = this.formBuilder.group({
      nome: [null]
    });
  }

  ngOnInit(): void {
  }

  criarAtor(): void{
    this.service.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Ator cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar ator.", '', {duration: 5000});
  }
}
