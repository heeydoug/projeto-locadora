import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-classe',
  templateUrl: './criar-classe.component.html',
  styleUrls: ['./criar-classe.component.scss']
})
export class CriarClasseComponent implements OnInit {

  constructor(
    private router: Router)
  {

  }

  ngOnInit(): void {
  }

  criarClasse(): void{
    this.router.navigate(['/classe']);
  }

  cancelar(): void {
    this.router.navigate(['/classe']);
  }
}
