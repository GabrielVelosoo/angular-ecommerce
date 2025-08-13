import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { FormsModule } from "@angular/forms";
import { PerfilComponent } from './components/perfil/perfil.component';
import { MudarSenhaComponent } from './components/mudar-senha/mudar-senha.component';
import { ListaEnderecosComponent } from './components/endereco/lista-enderecos/lista-enderecos.component';
import { AdicionarEnderecoComponent } from './components/endereco/adicionar-endereco/adicionar-endereco.component';
import { DadosPagamentoComponent } from './components/dados-pagamento/dados-pagamento.component';
import { HistoricoPedidosComponent } from './components/historico-pedidos/historico-pedidos.component';

@NgModule({
  declarations: [
    MinhaContaComponent,
    PerfilComponent,
    MudarSenhaComponent,
    ListaEnderecosComponent,
    AdicionarEnderecoComponent,
    DadosPagamentoComponent,
    HistoricoPedidosComponent
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule
    ],
  exports: [
    MinhaContaComponent,
    PerfilComponent,
    MudarSenhaComponent,
    ListaEnderecosComponent,
    AdicionarEnderecoComponent,
    DadosPagamentoComponent,
    HistoricoPedidosComponent
  ]
})
export class AccountModule { }
