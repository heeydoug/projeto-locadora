import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Cliente} from "../models/cliente";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ClienteService} from "../services/cliente.service";
import {ExcluirClienteComponent} from "../excluir-cliente/excluir-cliente.component";

@Component({
  selector: 'app-ler-cliente',
  templateUrl: './ler-cliente.component.html',
  styleUrls: ['./ler-cliente.component.scss']
})
export class LerClienteComponent implements OnInit {

  clientes: Observable<Cliente[]>;
  displayedColumns = ['id', 'numeroInscricao', 'nome', 'dataNascimento', 'sexo', 'estahAtivo', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clientes = this.clienteService.list();
  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.clientes = this.clienteService.list();
    });
  }

  editarCliente(cliente: Cliente ){
    this.router.navigate(['editarCliente', cliente._id], {relativeTo: this.route});
  }
  excluirCliente(row: Cliente): void {
    this.dialog.open(ExcluirClienteComponent, {
      width: '400px',
      data: row
    });
  }

}
