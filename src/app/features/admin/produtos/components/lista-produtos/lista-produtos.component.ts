import { Component, OnInit } from '@angular/core';
import { AdminProdutoService } from '../../../services/admin-produto.service';
import { Produto } from '../../../../../models/produto/Produto';

@Component({
  standalone: false,
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private adminProdutoService: AdminProdutoService
  ) {}

  ngOnInit(): void {
    this.adminProdutoService
      .obterProdutos('', 0, 10)
      .subscribe({
        next: (response) => {
          this.produtos = response.content;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
