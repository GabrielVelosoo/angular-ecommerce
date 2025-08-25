import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminProdutoService } from '../../../services/admin-produto.service';
import { Produto } from '../../../../../models/produto/Produto';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { Filtro } from '../../../../../models/produto/Filtro';
import { CategoriaService } from '../../../../../shared/services/categoria.service';
import { Categoria } from '../../../../../models/produto/Categoria';

@Component({
  standalone: false,
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit, OnDestroy {

  produtos: Produto[] = [];
  filtros: Filtro = new Filtro();
  categorias: Categoria[] = [];
  subcategorias: Categoria[] = [];
  categoriaSelecionadaId: number | null = null;
  subcategoriaSelecionadaId: number | null = null;
  nomeCategoriaPai?: string = '';
  pagina: number = 0;
  tamanhoPagina: number = 10;
  totalPaginas: number = 1;
  produtoSelecionado?: Produto;
  mostrarModal: boolean = false;
  searchControl = new FormControl<string>('');
  private destroy$ = new Subject<void>();

  constructor(
    private adminProdutoService: AdminProdutoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(nome => {
        this.filtros.nome = nome || '';
        this.pagina = 0;
        this.buscarProdutos();
      });

    this.buscarProdutos();
    this.carregarCategorias();
  }

  buscarProdutos(){
    this.filtros.categoriaId = this.subcategoriaSelecionadaId || this.categoriaSelecionadaId;
    this.adminProdutoService
      .obterProdutos(this.filtros, this.pagina, this.tamanhoPagina)
      .subscribe({
        next: (response) => {
          this.produtos = response.content;
          this.totalPaginas = response.totalPages;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  onSelectCategoriaPai(categoriaId: number) {
    const categoria: Categoria | undefined = this.categorias.find(c => c.id === +categoriaId);
    this.subcategorias = categoria?.subcategorias || [];
    this.subcategoriaSelecionadaId = null;
    this.nomeCategoriaPai = categoria ? categoria.nome : '';
  }

  irParaPagina(pagina: number) {
    this.pagina = pagina;
    this.buscarProdutos();
  }

  carregarCategorias() {
    this.categoriaService
      .obterCategorias()
      .subscribe({
        next: (response) => {
          this.categorias = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  abrirModal(produto: Produto) {
    this.produtoSelecionado = produto;
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
    this.produtoSelecionado = undefined;
  }

  confirmaExclusao() {
    if(!this.produtoSelecionado) return;
    this.adminProdutoService
      .excluirProduto(this.produtoSelecionado.id)
      .subscribe({
        next: () => {
          this.buscarProdutos();
          this.fecharModal();
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
