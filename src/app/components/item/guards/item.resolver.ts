import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ItemService} from "../services/item.service";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {

  constructor(
    private service: ItemService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      numserie: '',
      dtaquisicao: '',
      tipoItem: '',
      titulo: {_id: '', nome: '', ano: '', sinopse: '', categoria: '',
        atores: [{_id: '', nome: ''}]
      },
        diretor: { _id: '', nome: '' },
        classe: { _id: '', nome: '', data: '', valor: 0 }
    });
  }
}
