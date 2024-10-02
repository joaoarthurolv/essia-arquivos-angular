import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Diretorio } from '../models/diretorio';
import { Raiz } from '../models/raiz';

@Injectable({
  providedIn: 'root'
})
export class DiretoriosService {

  private readonly urlDiretorios = 'api/diretorios';

  private urlBase = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Raiz>(`${this.urlBase}/${this.urlDiretorios}`)
    .pipe(
      tap((result) => console.log(result.arquivos)),
      first()
    )
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.urlBase}/${this.urlDiretorios}/${id}`).pipe(first());
  }

  save(record: Diretorio){
    return this.httpClient.post<Diretorio>(`${this.urlBase}/${this.urlDiretorios}`, record).pipe(first());
  }
}
