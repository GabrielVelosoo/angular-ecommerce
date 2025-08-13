import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MudarSenhaComponent } from './components/mudar-senha/mudar-senha.component';
import { ListaEnderecosComponent } from './components/endereco/lista-enderecos/lista-enderecos.component';
import { AdicionarEnderecoComponent } from './components/endereco/adicionar-endereco/adicionar-endereco.component';
import { DadosPagamentoComponent } from './components/dados-pagamento/dados-pagamento.component';
import { HistoricoPedidosComponent } from './components/historico-pedidos/historico-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: MinhaContaComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: PerfilComponent
      },
      {
        path: 'update-password',
        component: MudarSenhaComponent
      },
      {
        path: 'address-book',
        component: ListaEnderecosComponent
      },
      {
        path: 'add-address',
        component: AdicionarEnderecoComponent
      },
      {
        path: 'edit-address/:id',
        component: AdicionarEnderecoComponent
      },
      {
        path: 'payment-details',
        component: DadosPagamentoComponent
      },
      {
        path: 'orders',
        component: HistoricoPedidosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
