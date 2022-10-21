import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly API = 'api/itens';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Item[]>(this.API)
      .pipe(
        first(),
        tap(itens => console.log(itens))
      );
  }

  save(record: Partial<Item>){
    return this.httpClient.post<Item>(this.API, record).pipe(first());
  }

  loadByID(id: string){
    return this.httpClient.get<Item>(`${this.API}/${id}`);
  }

  editar(record: Partial<Item>){
    return this.httpClient.put<Item>(`${this.API}/${record._id}`, record).pipe(first());
  }

  deletar(id: string){
    return this.httpClient.delete<string>(this.API, {
      params: {
        id: id
      }
    } );
  }
}
