import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";
import {Socio} from "../models/socio";

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private readonly API = 'api/socios'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Socio[]>(this.API)
      .pipe(
        first(),
        tap(socios => console.log(socios))
      );
  }

  save(record: Partial<Socio>){
    return this.httpClient.post<Socio>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Socio>(`${this.API}/${id}`);
  }

  editar(record: Partial<Socio>){
    return this.httpClient.put<Socio>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }

}
