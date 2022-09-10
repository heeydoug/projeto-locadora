import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";
import {Classe} from "../models/classe";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private readonly API = 'api/classes';

  constructor (private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Classe[]>(this.API)
      .pipe(
        first(),
        tap(classes => console.log(classes))
      );
  }

  save(record: Partial<Classe>){
    return this.httpClient.post<Classe>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Classe>(`${this.API}/${id}`);
  }

  editar(record: Partial<Classe>){
    return this.httpClient.put<Classe>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }
}
