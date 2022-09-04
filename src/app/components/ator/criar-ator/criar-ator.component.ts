import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-criar-ator',
  templateUrl: './criar-ator.component.html',
  styleUrls: ['./criar-ator.component.scss']
})
export class CriarAtorComponent implements OnInit {

  constructor(
    private router: Router)
  {

  }

  ngOnInit(): void {
  }

  criarAtor(): void{
    this.router.navigate(['/ator']);
  }

  cancelar(): void {
    this.router.navigate(['/ator']);
  }
}
