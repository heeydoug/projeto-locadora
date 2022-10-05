import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, take, tap} from "rxjs";
import {Diretor} from "../models/diretor";
import {Ator} from "../../ator/models/ator";

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private readonly API = 'api/diretores';

  constructor (private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Diretor[]>(this.API)
      .pipe(
        first(),
        tap(diretores => console.log(diretores))
      );
  }

  save(record: Partial<Diretor>){
    return this.httpClient.post<Diretor>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Diretor>(`${this.API}/${id}`);
  }

  editar(record: Partial<Diretor>){
    return this.httpClient.put<Diretor>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }

}
