import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar-diretor',
  templateUrl: './editar-diretor.component.html',
  styleUrls: ['./editar-diretor.component.scss']
})
export class EditarDiretorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editarDiretor(): void{
    this.router.navigate(['/diretor']);
  }

  cancelar(): void {
    this.router.navigate(['/diretor']);
  }
}
