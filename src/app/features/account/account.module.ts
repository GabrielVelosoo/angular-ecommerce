import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { FormsModule } from "@angular/forms";
import { PerfilComponent } from './components/perfil/perfil.component';
import { MudarSenhaComponent } from './components/mudar-senha/mudar-senha.component';
import {ListaEnderecoComponent} from './components/endereco/lista-endereco/lista-endereco.component';
import {AdicionarEnderecoComponent} from './components/endereco/adicionar-endereco/adicionar-endereco.component';

@NgModule({
  declarations: [
    MinhaContaComponent,
    PerfilComponent,
    MudarSenhaComponent,
    ListaEnderecoComponent,
    AdicionarEnderecoComponent
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
    ListaEnderecoComponent,
    AdicionarEnderecoComponent
  ]
})
export class AccountModule { }
