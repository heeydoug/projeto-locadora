import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-item',
  templateUrl: './crud-item.component.html',
  styleUrls: ['./crud-item.component.scss']
})
export class CrudItemComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adicionarItem(): void{
    this.router.navigate(['/item/criarItem']);
  }

}
