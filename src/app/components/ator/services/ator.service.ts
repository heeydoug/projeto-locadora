import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ator} from "../models/ator";
import {first, take, tap} from "rxjs";

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

  save(record: Ator){
    return this.httpClient.post<Ator>(this.API, record).pipe(first());
  }

  loadByID(id: any){
    return this.httpClient.get(`${this.API}/${id}`).pipe(take(1));

  }

}
