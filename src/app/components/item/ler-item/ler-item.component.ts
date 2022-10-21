import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../models/item";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../services/item.service";
import {ExcluirItemComponent} from "../excluir-item/excluir-item.component";

@Component({
  selector: 'app-ler-item',
  templateUrl: './ler-item.component.html',
  styleUrls: ['./ler-item.component.scss']
})
export class LerItemComponent implements OnInit {

  itens: Observable<Item[]>

  displayedColumns = ['id', 'numserie', 'dtaquisicao', 'tipoItem', 'titulo', 'acoes'];

  constructor(
    private dialog: MatDialog,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.itens = this.itemService.list();
  }

  ngOnInit(): void {
    //Atualizar quando é feito alguma alteração como editar ou excluir (i think
    this.dialog.afterAllClosed.subscribe(_ => {
      this.itens = this.itemService.list();
    });
  }

  editarItem(item: Item){
    this.router.navigate(['editarItem', item._id], {relativeTo: this.route});
  }
  excluirItem(row: Item): void {
    this.dialog.open(ExcluirItemComponent, {
      width: '400px',
      data: row
    });
  }

}
