import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-locacao',
  templateUrl: './crud-locacao.component.html',
  styleUrls: ['./crud-locacao.component.scss']
})
export class CrudLocacaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  adicionarLocacao(): void{
    this.router.navigate(['/locacao/criarLocacao']);
  }

}
