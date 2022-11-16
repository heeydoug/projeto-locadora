import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Locacao} from "../models/locacao";
import {LocacaoService} from "../services/locacao.service";
import {Item} from "../../item/models/item";

@Injectable({
  providedIn: 'root'
})
export class LocacaoResolver implements Resolve<Locacao> {
  constructor(
    private service: LocacaoService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Locacao> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    return of({
      _id: '',
      dtLocacao: '',
      dtDevolucaoPrevista: '',
      dtDevolucaoEfetiva: '',
      valorCobrado: 0,
      multaCobrada: 0,
      item: {
        _id: '',
        numserie: '',
        dtaquisicao: '',
        tipoItem: '',
        titulo: {_id: '', nome: '', ano: '', sinopse: '', categoria: '', atores: [{_id: '', nome: ''}]},
        diretor: {_id: '', nome: ''},
        classe: {_id: '', nome: '', data: '', valor: 0}
      },
      cliente: {_id: '', numeroInscricao: 0, nome: '', dataNascimento: '', sexo: '', estahAtivo: ''}
    });
  }
}
