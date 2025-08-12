import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MudarSenhaComponent } from './components/mudar-senha/mudar-senha.component';
import { ListaEnderecoComponent } from './components/endereco/lista-endereco/lista-endereco.component';
import { AdicionarEnderecoComponent } from './components/endereco/adicionar-endereco/adicionar-endereco.component';

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
        component: ListaEnderecoComponent
      },
      {
        path: 'add-address',
        component: AdicionarEnderecoComponent
      },
      {
        path: 'edit-address/:id',
        component: AdicionarEnderecoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
