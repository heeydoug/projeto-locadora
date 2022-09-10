import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AtorService} from "../../ator/services/ator.service";
import {NonNullableFormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ClasseService} from "../services/classe.service";
import {Ator} from "../../ator/models/ator";
import {Classe} from "../models/classe";

@Component({
  selector: 'app-editar-classe',
  templateUrl: './editar-classe.component.html',
  styleUrls: ['./editar-classe.component.scss']
})
export class EditarClasseComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    data: [''],
    valor: [0]
  });

  constructor(
    private router: Router,
    private service: ClasseService,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}
  ngOnInit(): void {
    const classe: Classe = this.route.snapshot.data['classe'];
    console.log(classe);

    this.form.setValue({
       _id: classe._id,
       nome: classe.nome,
       data: classe.data,
      valor: classe.valor
   });
  }

  editarClasse(): void{
    this.service.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Classe editada com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar classe.", '', {duration: 5000});
  }

}
