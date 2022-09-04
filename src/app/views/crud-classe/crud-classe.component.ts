import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-classe',
  templateUrl: './crud-classe.component.html',
  styleUrls: ['./crud-classe.component.scss']
})
export class CrudClasseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irParaCriarClasse(): void{
    this.router.navigate(['/classe/criarClasse']);
  }
}
