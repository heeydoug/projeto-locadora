import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";
import {Cliente} from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'api/clientes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        first(),
        tap(clientes => console.log(clientes))
      );
  }

  save(record: Partial<Cliente>){
    return this.httpClient.post<Cliente>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Cliente>(`${this.API}/${id}`);
  }

  editar(record: Partial<Cliente>){
    return this.httpClient.put<Cliente>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }

}
