import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../../../../models/produto/Categoria';
import { switchMap } from 'rxjs';
import { Produto } from '../../../../models/produto/Produto';

@Component({
  standalone: false,
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos-por-categoria.component.html',
  styleUrl: './lista-produtos-por-categoria.component.css'
})
export class ListaProdutosPorCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  produtos: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => {
          const subcategoria: string = params['subcategoria'];
          return this.produtoService.obterCategoriaPorSlug(subcategoria);
        }),
        switchMap(categoria => {
          this.categoria = categoria;
          return this.produtoService.obterProdutosPorCategoria(categoria.id);
        })
      )
      .subscribe({
        next: (produtos: Produto[]) => {
          this.produtos = produtos;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
