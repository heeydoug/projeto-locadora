import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {DiretorService} from "../services/diretor.service";

@Component({
  selector: 'app-criar-diretor',
  templateUrl: './criar-diretor.component.html',
  styleUrls: ['./criar-diretor.component.scss']
})
export class CriarDiretorComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: DiretorService,
    private snackBar: MatSnackBar,
    private location: Location)
  {
    this.form = this.formBuilder.group({
      nome: [null]
    });
  }

  ngOnInit(): void {
  }

  criarDiretor(): void{
    this.service.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Diretor cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar diretor.", '', {duration: 5000});
  }

}
