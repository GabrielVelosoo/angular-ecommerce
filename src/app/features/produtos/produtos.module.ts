import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';


@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  exports: [
    ListaProdutosComponent
  ]
})
export class ProdutosModule { }
