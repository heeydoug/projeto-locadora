import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ator} from "../../ator/models/ator";
import {Titulo} from "../../titulo/models/titulo";
import {Router} from "@angular/router";
import {TituloService} from "../../titulo/services/titulo.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-criar-item',
  templateUrl: './criar-item.component.html',
  styleUrls: ['./criar-item.component.scss']
})
export class CriarItemComponent implements OnInit {

  form: FormGroup;

  titulos: Titulo[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tituloService: TituloService,
    private snackBar: MatSnackBar,
    private location: Location,
    private itemService: ItemService,
  ) {

    this.form = this.formBuilder.group({
      numserie: [null],
      dtaquisicao: [null],
      tipoItem: [null],
      titulo: [null]
    });

  }

  ngOnInit(): void {
    this.tituloService.list().subscribe(titulos =>{
      this.titulos = titulos;
    });
  }

  criarItem(): void{
    this.itemService.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Item cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar item.", '', {duration: 5000});
  }

}
