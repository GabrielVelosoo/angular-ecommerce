import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaProdutosPorCategoriaComponent } from './components/lista-produtos/lista-produtos-por-categoria.component';


@NgModule({
  declarations: [
    ListaProdutosPorCategoriaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    NgOptimizedImage
  ],
  exports: [
    ListaProdutosPorCategoriaComponent
  ]
})
export class ProdutosModule { }
