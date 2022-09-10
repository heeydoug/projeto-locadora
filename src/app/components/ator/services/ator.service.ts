import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ator} from "../models/ator";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = 'api/atores';

  constructor (private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ator[]>(this.API)
      .pipe(
        first(),
        tap(atores => console.log(atores))
      );
  }

  save(record: Partial<Ator>){
    return this.httpClient.post<Ator>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Ator>(`${this.API}/${id}`);
  }

  editar(record: Partial<Ator>){
    return this.httpClient.put<Ator>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }
}
