import { Injectable } from '@angular/core';
import { Diretorio } from '../models/diretorio';
import { HttpClient } from '@angular/common/http';
import { tap, first, delay } from 'rxjs';
import {  Raiz } from '../models/raiz';

@Injectable({
  providedIn: 'root'
})
export class DiretoriosService {

  private readonly urlApi = 'api/diretorios'

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Raiz>(this.urlApi)
    .pipe(
      tap((result) => console.log(result.arquivos)),
      first()
    )
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`).pipe(first());
  }

  save(record: Diretorio){
    return this.httpClient.post<Diretorio>(this.urlApi, record).pipe(first());
  }
}
