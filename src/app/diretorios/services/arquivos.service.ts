import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arquivo } from '../models/arquivo';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  private readonly urlApi = 'api/arquivos'

  constructor(private httpClient: HttpClient) {}

  save(record: Arquivo){
    return this.httpClient.post<Arquivo>(this.urlApi, record).pipe(first());
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`).pipe(first());
  }

  update(record: Arquivo){
    return this.httpClient.put<Arquivo>(this.urlApi, record).pipe(first());
  }
}
