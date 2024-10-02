import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arquivo } from '../models/arquivo';
import { first } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  private readonly arquivos = 'api/arquivos'

  private urlBase = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  save(record: Arquivo){
    return this.httpClient.post<Arquivo>(`${this.urlBase}/${this.arquivos}`, record).pipe(first());
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.urlBase}/${this.arquivos}/${id}`).pipe(first());
  }

  update(record: Arquivo){
    return this.httpClient.put<Arquivo>(`${this.urlBase}/${this.arquivos}`, record).pipe(first());
  }
}
