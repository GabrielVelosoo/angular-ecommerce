import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../../../../../shared/services/categoria.service';
import { Categoria } from '../../../../../models/produto/Categoria';
import { Produto } from '../../../../../models/produto/Produto';
import { AdminProdutoService } from '../../../services/admin-produto.service';
import { Erro } from '../../../../../models/erro/Erro';

@Component({
  standalone: false,
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrl: './formulario-produto.component.css'
})
export class FormularioProdutoComponent implements OnInit {

  @ViewChild('inputImagem')
  inputImagem!: ElementRef;

  produto: Produto = new Produto;
  categorias: Categoria[] = [];
  subcategorias: Categoria[] = [];
  categoriaSelecionadaId: number | null = null;
  subcategoriaSelecionadaId: number | null = null;
  erros: Erro = new Erro();
  mensagemSucesso: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private adminProdutoService: AdminProdutoService
  ) { }

  ngOnInit(): void {
    this.categoriaService
      .obterCategorias()
      .subscribe({
        next: (response) => {
          this.categorias = response;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  onSelectCategoriaPai(categoriaId: number) {
    const categoria: Categoria | undefined = this.categorias.find(c => c.id === +categoriaId);
    this.subcategorias = categoria?.subcategorias || [];
  }

  onFileSelected(event: any) {
    this.produto.imagem = event.target.files[0];
  }

  salvarProduto() {
    const categoriaFinalId = this.subcategoriaSelecionadaId || this.categoriaSelecionadaId;
    this.adminProdutoService
      .salvarProduto(this.produto, this.produto.imagem, categoriaFinalId)
      .subscribe({
        next: () => {
          this.produto = new Produto();
          this.inputImagem.nativeElement.value = '';
          this.categoriaSelecionadaId = null;
          this.subcategoriaSelecionadaId = null;
          this.erros = new Erro();
          this.mensagemSucesso = true;
          this.subcategorias = [];
        },
        error: (error) => {
          this.erros = error.error;
          this.mensagemSucesso = false
          this.subcategorias = [];
        }
      });
  }
}
