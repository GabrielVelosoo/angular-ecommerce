import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './components/my-account/my-account.component';

@NgModule({
  declarations: [
    MyAccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [
    MyAccountComponent,
  ]
})
export class AccountModule { }
