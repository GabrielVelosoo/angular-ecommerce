import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyAccountComponent,
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule
    ],
  exports: [
    MyAccountComponent,
  ]
})
export class AccountModule { }
