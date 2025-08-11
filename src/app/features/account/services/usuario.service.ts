import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/usuario/Cliente';
import { Endereco } from '../../../models/usuario/Endereco';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl: string = environment.apiBaseUrl + '/api/clientes';

  constructor(
    private http: HttpClient
  ) { }

  obterUsuarioLogado(): Observable<any> {
    const url: string = environment.apiBaseUrl + '/api/usuarios/me';
    return this.http.get<Observable<any>>(`${url}`);
  }

  obterUsuarioPorId(id: number): Observable<any> {
    const url: string = this.apiUrl + `/${id}`;
    return this.http.get<Observable<any>>(`${url}`);
  }

  atualizarDadosUsuario(id: number, dadosAtualizados: Cliente): Observable<any> {
    const url: string = this.apiUrl + `/${id}`;
    return this.http.put(url, dadosAtualizados);
  }

  alterarSenha(senhaAtual: string, novaSenha: string): Observable<any> {
    const url: string = environment.apiBaseUrl + '/api/usuarios/alterar-senha';
    const body = {
      senhaAtual: senhaAtual,
      novaSenha: novaSenha
    }
    return this.http.put(url, body);
  }

  obterEnderecosUsuarioLogado(): Observable<Endereco[]> {
    const url: string = environment.apiBaseUrl + '/api/enderecos';
    return this.http.get<Endereco[]>(`${url}`);
  }

  salvarEndereco(endereco: Endereco): Observable<any> {
    const url: string = environment.apiBaseUrl + '/api/enderecos';
    return this.http.post<Observable<any>>(`${url}`, endereco);
  }

  deletarEndereco(enderecoId: number): Observable<any> {
    const url: string = environment.apiBaseUrl + `/api/enderecos/${enderecoId}`;
    return this.http.delete(url);
  }
}
