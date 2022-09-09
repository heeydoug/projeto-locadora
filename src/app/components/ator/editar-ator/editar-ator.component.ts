import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AtorService} from "../services/ator.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-editar-ator',
  templateUrl: './editar-ator.component.html',
  styleUrls: ['./editar-ator.component.scss']
})
export class EditarAtorComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private service: AtorService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
      nome: [null]
    });
  }

  ngOnInit(): void {

    this.route.params
      .pipe(
        map(
          (params: any) => params['id']),
        switchMap(id => this.service.loadByID(id))
        )
      .subscribe(ator => this.atualizarFormulario(ator));

  }

  atualizarFormulario(ator: any){
    this.form.patchValue({
      id: ator.id,
      nome: ator.nome
    })
  }

  editarAtor(): void{
    this.router.navigate(['/ator']);
  }

  cancelar(): void {
    this.router.navigate(['/ator']);
  }

}
