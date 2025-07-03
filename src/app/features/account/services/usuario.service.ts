import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl: string = environment.apiBaseUrl + '/api/clientes';

  constructor(
    private http: HttpClient
  ) { }

  obterUsuarioLogado(): Observable<any> {
    const url: string = this.apiUrl + '/me';
    return this.http.get<Observable<any>>(`${url}`);
  }

  obterUsuarioPorId(id: number): Observable<any> {
    const url: string = this.apiUrl + `/${id}`;
    return this.http.get<Observable<any>>(`${url}`);
  }
}
