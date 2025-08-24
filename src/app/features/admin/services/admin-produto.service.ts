import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../../models/produto/Produto';
import { Filtro } from '../../../models/produto/Filtro';

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

  obterProdutos(filtros: Filtro, pagina?: number, tamanhoPagina?: number): Observable<any> {
    let params: any = {};
    if(filtros.nome !== undefined && filtros.nome !== null) {
      params['nome'] = filtros.nome;
    }
    if(filtros.precoMin !== undefined && filtros.precoMin !== null) {
      params['precoMin'] = filtros.precoMin;
    }
    if(filtros.precoMax !== undefined && filtros.precoMax !== null) {
      params['precoMax'] = filtros.precoMax;
    }
    if(filtros.estoqueMin !== undefined && filtros.estoqueMin !== null) {
      params['estoqueMin'] = filtros.estoqueMin;
    }
    if(filtros.estoqueMax !== undefined && filtros.estoqueMax !== null) {
      params['estoqueMax'] = filtros.estoqueMax;
    }
    if(filtros.categoriaId !== undefined && filtros.categoriaId !== null) {
      params['categoriaId'] = filtros.categoriaId;
    }
    if(pagina !== undefined && pagina !== null) {
      params['pagina'] = pagina;
    }
    if(tamanhoPagina !== undefined && tamanhoPagina !== null) {
      params['tamanho-pagina'] = tamanhoPagina;
    }
    return this.http.get(this.apiUrl, { params });
  }

  excluirProduto(produtoId: number) {
    const url: string = this.apiUrl + `/${produtoId}`;
    return this.http.delete(url);
  }
}
