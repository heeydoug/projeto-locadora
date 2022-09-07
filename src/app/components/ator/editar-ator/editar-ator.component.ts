import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar-ator',
  templateUrl: './editar-ator.component.html',
  styleUrls: ['./editar-ator.component.scss']
})
export class EditarAtorComponent implements OnInit {

  constructor(
    private router: Router)
  {

  }

  ngOnInit(): void {
  }

  editarAtor(): void{
    this.router.navigate(['/ator']);
  }

  cancelar(): void {
    this.router.navigate(['/ator']);
  }

}
