import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-diretor',
  templateUrl: './crud-diretor.component.html',
  styleUrls: ['./crud-diretor.component.scss']
})
export class CrudDiretorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adicionarDiretor(): void{
    this.router.navigate(['/diretor/criarDiretor']);
  }
}
