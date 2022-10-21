import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {TituloService} from "../services/titulo.service";
import {Titulo} from "../models/titulo";

@Injectable({
  providedIn: 'root'
})
export class TituloResolver implements Resolve<Titulo> {

  constructor(
    private service: TituloService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Titulo> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      nome: '',
      ano: '',
      sinopse: '',
      categoria: '',
      atores: [],
      diretor: { _id: '', nome: '' },
      classe: { _id: '', nome: '', data: '', valor: 0 }

    });
  }
}
