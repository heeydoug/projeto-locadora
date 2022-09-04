import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-diretor',
  templateUrl: './criar-diretor.component.html',
  styleUrls: ['./criar-diretor.component.scss']
})
export class CriarDiretorComponent implements OnInit {

  constructor(
    private router: Router)
  {

  }

  ngOnInit(): void {
  }

  criarDiretor(): void{
    this.router.navigate(['/diretor']);
  }

  cancelar(): void {
    this.router.navigate(['/diretor']);
  }

}
