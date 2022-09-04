import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-ator',
  templateUrl: './crud-ator.component.html',
  styleUrls: ['./crud-ator.component.scss']
})
export class CrudAtorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irParaCriarAtor(): void{
    this.router.navigate(['/ator/criarAtor']);
  }

}
