import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {SocioService} from "../services/socio.service";
import {Socio} from "../models/socio";

@Injectable({
  providedIn: 'root'
})
export class SocioResolver implements Resolve<Socio> {

  constructor(
    private service: SocioService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Socio> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      numeroInscricao: 0,
      nome: '',
      cpf: '',
      dataNascimento: '',
      endereco: '',
      telefone: '',
      sexo: '',
      dependentes: [],
      estahAtivo: '',
    });
  }
}
