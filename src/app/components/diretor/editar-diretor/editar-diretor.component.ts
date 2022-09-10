import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {DiretorService} from "../services/diretor.service";
import {Diretor} from "../models/diretor";

@Component({
  selector: 'app-editar-diretor',
  templateUrl: './editar-diretor.component.html',
  styleUrls: ['./editar-diretor.component.scss']
})
export class EditarDiretorComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: ['']
  });

  constructor(
    private router: Router,
    private service: DiretorService,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {

    const diretor: Diretor = this.route.snapshot.data['diretor'];
    console.log(diretor);

    this.form.setValue({
      _id: diretor._id,
      nome: diretor.nome
    });

  }

  editarDiretor(): void{
    this.service.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Diretor editado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar diretor.", '', {duration: 5000});
  }
}
