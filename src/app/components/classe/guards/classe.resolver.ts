import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ClasseService} from "../services/classe.service";
import {Classe} from "../models/classe";

@Injectable({
  providedIn: 'root'
})
export class ClasseResolver implements Resolve<Classe> {

  constructor(
    private service: ClasseService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Classe> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      nome: '',
      data: '',
      valor: 0
    });
  }
}
