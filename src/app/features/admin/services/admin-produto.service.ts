import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../../models/produto/Produto';

@Injectable({
  providedIn: 'root'
})
export class AdminProdutoService {

  apiUrl: string = environment.apiBaseUrl + '/api/produtos';

  constructor(
    private http: HttpClient
  ) { }

  salvarProduto(produto: Produto, imagem: File, categoriaFinalId: number | null): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nome', produto.nome);
    formData.append('descricao', produto.descricao);
    formData.append('preco', produto.preco.toString());
    formData.append('quantidadeEstoque', produto.quantidadeEstoque.toString());

    if(imagem) {
      formData.append('imagem', imagem);
    }

    if(categoriaFinalId) {
      formData.append('categoriaId', categoriaFinalId.toString())
    }

    return this.http.post(this.apiUrl, formData);
  }

  obterProdutos(nome?: string, pagina?: number, tamanhoPagina?: number): Observable<any> {
    let params: any = {};
    if(nome !== undefined && nome !== null) {
      params['nome'] = nome;
    }
    if(pagina !== undefined && pagina !== null) {
      params['pagina'] = pagina;
    }
    if(tamanhoPagina !== undefined && tamanhoPagina !== null) {
      params['tamanho-pagina'] = tamanhoPagina;
    }
    return this.http.get(this.apiUrl, { params });
  }
}
