import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-socio',
  templateUrl: './crud-socio.component.html',
  styleUrls: ['./crud-socio.component.scss']
})
export class CrudSocioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adicionarSocio(): void{
    this.router.navigate(['/socio/criarSocio']);
  }

}
