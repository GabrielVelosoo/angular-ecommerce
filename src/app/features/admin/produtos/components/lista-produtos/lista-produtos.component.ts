import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminProdutoService } from '../../../services/admin-produto.service';
import { Produto } from '../../../../../models/produto/Produto';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit, OnDestroy {

  produtos: Produto[] = [];
  searchControl = new FormControl<string>('');
  private destroy$ = new Subject<void>();

  constructor(
    private adminProdutoService: AdminProdutoService
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((nome) => {
        this.buscarProduto(nome || '');
      });

    this.buscarProduto('');
  }

  buscarProduto(nome: string){
    this.adminProdutoService
      .obterProdutos(nome, 0 , 10)
      .subscribe({
        next: (response) => {
          this.produtos = response.content;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
