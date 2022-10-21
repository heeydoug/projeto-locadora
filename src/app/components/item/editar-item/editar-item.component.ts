import { Component, OnInit } from '@angular/core';
import {Ator} from "../../ator/models/ator";
import {Diretor} from "../../diretor/models/diretor";
import {Classe} from "../../classe/models/classe";
import {Titulo} from "../../titulo/models/titulo";
import {ActivatedRoute, Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {TituloService} from "../../titulo/services/titulo.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ItemService} from "../services/item.service";
import {Item} from "../models/item";

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss']
})
export class EditarItemComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    numserie: '',
    dtaquisicao: [''],
    tipoItem: '',
    titulo: [<Titulo>{}]
  });

  titulos: Titulo[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private tituloService: TituloService,
    private snackBar: MatSnackBar,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.tituloService.list().subscribe(titulos =>{
      this.titulos = titulos;
    });

    const item: Item = this.route.snapshot.data['item'];
    console.log(item);

    this.form.patchValue({
      _id: item._id,
      numserie: item.numserie,
      dtaquisicao: item.dtaquisicao,
      tipoItem: item.tipoItem,
      titulo: item.titulo

    });
  }

  editarItem(): void{
    this.itemService.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Item editado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar item.", '', {duration: 5000});
  }

}
