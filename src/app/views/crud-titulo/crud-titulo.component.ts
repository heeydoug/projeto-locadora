import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-titulo',
  templateUrl: './crud-titulo.component.html',
  styleUrls: ['./crud-titulo.component.scss']
})
export class CrudTituloComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adicionarTitulo(): void{
    this.router.navigate(['/titulo/criarTitulo']);
  }
}
