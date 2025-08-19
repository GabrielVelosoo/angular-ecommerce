import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/produto/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl: string = environment.apiBaseUrl + '/api/categorias'

  constructor(
    private http: HttpClient,
  ) { }

  obterCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
}
