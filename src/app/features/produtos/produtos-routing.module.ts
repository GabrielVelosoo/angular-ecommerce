import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosPorCategoriaComponent } from './components/lista-produtos/lista-produtos-por-categoria.component';

const routes: Routes = [
  {
    path: ':categoriaPai/:subcategoria',
    component: ListaProdutosPorCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
