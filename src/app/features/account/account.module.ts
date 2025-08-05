import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { FormsModule } from "@angular/forms";
import { PerfilComponent } from './components/perfil/perfil.component';
import { MudarSenhaComponent } from './components/mudar-senha/mudar-senha.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    PerfilComponent,
    MudarSenhaComponent
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule
    ],
  exports: [
    MyAccountComponent,
    PerfilComponent,
    MudarSenhaComponent
  ]
})
export class AccountModule { }
