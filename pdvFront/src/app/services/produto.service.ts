import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Model/pdv.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = 'http://localhost:8080'



  constructor(private http: HttpClient) {
  }

  findAllProdutosById(): Observable<Produto[]> {
    const url = this.baseUrl + '/produto'
    return this.http.get<Produto[]>(url)
  }
  findAllProdutosByCod(cod: String): Observable<Produto> {
    const url = `${this.baseUrl}/produto/codigo/${cod}`;
    return this.http.get<Produto>(url)
  }

}
