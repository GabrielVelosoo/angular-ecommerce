import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormularioProdutoComponent } from './produtos/components/formulario-produto/formulario-produto.component';
import { GerenciarProdutosComponent } from './produtos/components/gerenciar-produtos/gerenciar-produtos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListaProdutosComponent } from './produtos/components/lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    FormularioProdutoComponent,
    GerenciarProdutosComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioProdutoComponent,
    GerenciarProdutosComponent,
    ListaProdutosComponent
  ]
})
export class AdminModule { }
