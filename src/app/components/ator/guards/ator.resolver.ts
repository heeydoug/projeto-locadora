import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AtorService} from "../services/ator.service";
import {Ator} from "../models/ator";

@Injectable({
  providedIn: 'root'
})


export class AtorResolver implements Resolve<Ator> {

  constructor(
    private service: AtorService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ator> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      nome: ''
    });
  }
}
