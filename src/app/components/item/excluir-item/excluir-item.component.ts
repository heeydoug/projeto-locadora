import {Component, Inject, OnInit} from '@angular/core';
import {Item} from "../models/item";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemService} from "../services/item.service";
import {first} from "rxjs";

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.scss']
})
export class ExcluirItemComponent implements OnInit {

  public item: Item;

  constructor(
    public dialogRef: MatDialogRef<ExcluirItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private service: ItemService,
  ) {
    this.item = data;
  }

  ngOnInit(): void {
  }

  excluirItem() {
    console.log(this.item)
    this.service.deletar(this.item._id).pipe(first()).subscribe()
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(true);

  }

}
