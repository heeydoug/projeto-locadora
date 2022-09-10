import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DiretorService} from "../services/diretor.service";
import {Diretor} from "../models/diretor";

@Injectable({
  providedIn: 'root'
})
export class DiretorResolver implements Resolve<Diretor> {

  constructor(
    private service: DiretorService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Diretor> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      nome: ''
    });
  }
}
