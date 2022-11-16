import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {TituloService} from "../../titulo/services/titulo.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ItemService} from "../../item/services/item.service";
import {Item} from "../../item/models/item";
import {Cliente} from "../../cliente/models/cliente";
import {ClienteService} from "../../cliente/services/cliente.service";
import {LocacaoService} from "../services/locacao.service";

@Component({
  selector: 'app-criar-locacao',
  templateUrl: './criar-locacao.component.html',
  styleUrls: ['./criar-locacao.component.scss']
})
export class CriarLocacaoComponent implements OnInit {

  form: FormGroup;

  itens: Item[] = [];
  clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private itemService: ItemService,
    private clienteService: ClienteService,
    private locacaoService: LocacaoService

  ) {
    this.form = this.formBuilder.group({
      dtLocacao: [null],
      dtDevolucaoPrevista: [null],
      dtDevolucaoEfetiva: [null],
      valorCobrado: [null],
      multaCobrada: [null],
      item: [null],
      cliente: [null]
    });
  }

  ngOnInit(): void {
    this.itemService.list().subscribe(itens =>{
      this.itens = itens;
    });
    this.clienteService.list().subscribe(clientes =>{
      this.clientes = clientes;
    });
  }

  criarLocacao(): void{
    this.locacaoService.save(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Locação cadastrada com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar locação.", '', {duration: 5000});
  }

}
