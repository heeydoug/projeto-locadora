import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Locacao} from "../models/locacao";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private readonly API = 'api/locacoes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Locacao[]>(this.API)
      .pipe(
        first(),
        tap(locacoes => console.log(locacoes))
      );
  }

  save(record: Partial<Locacao>){
    return this.httpClient.post<Locacao>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Locacao>(`${this.API}/${id}`);
  }

  editar(record: Partial<Locacao>){
    return this.httpClient.put<Locacao>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }
}
