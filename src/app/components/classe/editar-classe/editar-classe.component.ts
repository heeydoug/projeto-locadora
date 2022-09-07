import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar-classe',
  templateUrl: './editar-classe.component.html',
  styleUrls: ['./editar-classe.component.scss']
})
export class EditarClasseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editarClasse(): void{
    this.router.navigate(['/classe']);
  }

  cancelar(): void {
    this.router.navigate(['/classe']);
  }

}
