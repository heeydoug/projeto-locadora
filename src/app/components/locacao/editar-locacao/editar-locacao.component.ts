import { Component, OnInit } from '@angular/core';
import {Ator} from "../../ator/models/ator";
import {Diretor} from "../../diretor/models/diretor";
import {Classe} from "../../classe/models/classe";
import {Cliente} from "../../cliente/models/cliente";
import {Item} from "../../item/models/item";
import {ActivatedRoute, Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ItemService} from "../../item/services/item.service";
import {ClienteService} from "../../cliente/services/cliente.service";
import {LocacaoService} from "../services/locacao.service";
import {Titulo} from "../../titulo/models/titulo";
import {Locacao} from "../models/locacao";

@Component({
  selector: 'app-editar-locacao',
  templateUrl: './editar-locacao.component.html',
  styleUrls: ['./editar-locacao.component.scss']
})
export class EditarLocacaoComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    dtLocacao: [''],
    dtDevolucaoPrevista: [''],
    dtDevolucaoEfetiva: [''],
    valorCobrado: [0],
    multaCobrada: [0],
    item: [<Item>{}],
    cliente: [<Cliente>{}]
  });

  itens: Item[] = [];
  clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private itemService: ItemService,
    private clienteService: ClienteService,
    private locacaoService: LocacaoService
  ) { }

  ngOnInit(): void {
    this.itemService.list().subscribe(itens =>{
      this.itens = itens;
    });
    this.clienteService.list().subscribe(clientes =>{
      this.clientes = clientes;
    });

    const locacao: Locacao = this.route.snapshot.data['locacao'];
    console.log(locacao);

    this.form.patchValue({
      _id: locacao._id,
      dtLocacao: locacao.dtLocacao,
      dtDevolucaoPrevista: locacao.dtDevolucaoPrevista,
      dtDevolucaoEfetiva: locacao.dtDevolucaoEfetiva,
      valorCobrado: locacao.valorCobrado,
      multaCobrada: locacao.multaCobrada,
      item: locacao.item,
      cliente: locacao.cliente

    });
  }

  editarLocacao(): void{
    this.locacaoService.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Locação alterada com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar locação.", '', {duration: 5000});
  }

}
