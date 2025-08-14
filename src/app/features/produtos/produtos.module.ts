import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';


@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    NgOptimizedImage
  ],
  exports: [
    ListaProdutosComponent
  ]
})
export class ProdutosModule { }
