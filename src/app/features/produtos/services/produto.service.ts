import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../../../models/produto/Categoria';
import { Produto } from '../../../models/produto/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl: string = environment.apiBaseUrl + '/api/produtos';

  constructor(
    private http: HttpClient
  ) { }

  obterCategoriaPorSlug(slug: string): Observable<Categoria> {
    const url: string = environment.apiBaseUrl + `/api/categorias/${slug}`;
    return this.http.get<Categoria>(url);
  }

  obterProdutosPorCategoria(categoriaId: number): Observable<Produto[]> {
    const url: string = this.apiUrl + `/categorias/${categoriaId}`;
    return this.http.get<Produto[]>(url);
  }
}
