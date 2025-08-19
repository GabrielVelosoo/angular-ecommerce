import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../../../shared/services/categoria.service';
import { Categoria } from '../../../../../models/produto/Categoria';
import { Produto } from '../../../../../models/produto/Produto';
import { AdminProdutoService } from '../../../services/admin-produto.service';

@Component({
  standalone: false,
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrl: './formulario-produto.component.css'
})
export class FormularioProdutoComponent implements OnInit {

  produto: Produto = new Produto;
  categorias: Categoria[] = [];
  subcategorias: Categoria[] = [];
  categoriaSelecionadaId?: number;
  subcategoriaSelecionadaId?: number;

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
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
