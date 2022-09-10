import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AtorService} from "../services/ator.service";
import {NonNullableFormBuilder} from "@angular/forms";

import {Ator} from "../models/ator";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-editar-ator',
  templateUrl: './editar-ator.component.html',
  styleUrls: ['./editar-ator.component.scss']
})
export class EditarAtorComponent implements OnInit {


  form = this.formBuilder.group({
    _id: [''],
    nome: ['']
  });

  constructor(
    private router: Router,
    private service: AtorService,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location) {}

  ngOnInit(): void {

    const ator: Ator = this.route.snapshot.data['ator'];
    console.log(ator);

    this.form.setValue({
      _id: ator._id,
      nome: ator.nome
    });
  }

  editarAtor(): void{
    this.service.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Ator editado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar ator.", '', {duration: 5000});
  }

}
