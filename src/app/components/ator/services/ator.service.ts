import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ator} from "../models/ator";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = '/assets/atores.json';

  constructor (private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ator[]>(this.API)
      .pipe(
        first(),
        tap(atores => console.log(atores))
      );
  }
}
