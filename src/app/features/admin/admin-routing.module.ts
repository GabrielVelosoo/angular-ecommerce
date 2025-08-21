import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarProdutosComponent } from './produtos/components/gerenciar-produtos/gerenciar-produtos.component';
import { FormularioProdutoComponent } from './produtos/components/formulario-produto/formulario-produto.component';
import {ListaProdutosComponent} from './produtos/components/lista-produtos/lista-produtos.component';

const routes: Routes = [
  {
    path: 'products-manager',
    component: GerenciarProdutosComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ListaProdutosComponent
      },
      {
        path: 'add-product',
        component: FormularioProdutoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
