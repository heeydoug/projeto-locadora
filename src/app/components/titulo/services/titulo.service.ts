import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";
import {Titulo} from "../models/titulo";

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  private readonly API = 'api/titulos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Titulo[]>(this.API)
      .pipe(
        first(),
        tap(titulos => console.log(titulos))
      );
  }

  save(record: Partial<Titulo>){
    return this.httpClient.post<Titulo>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Titulo>(`${this.API}/${id}`);
  }

  editar(record: Partial<Titulo>){
    return this.httpClient.put<Titulo>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }
}
