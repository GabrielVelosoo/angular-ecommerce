import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormularioProdutoComponent } from './produtos/components/formulario-produto/formulario-produto.component';
import { GerenciarProdutosComponent } from './produtos/components/gerenciar-produtos/gerenciar-produtos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioProdutoComponent,
    GerenciarProdutosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [
    FormularioProdutoComponent,
    GerenciarProdutosComponent
  ]
})
export class AdminModule { }
