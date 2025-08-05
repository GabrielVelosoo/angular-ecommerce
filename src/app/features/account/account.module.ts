import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from './components/profile/profile.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    ProfileComponent
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule
    ],
  exports: [
    MyAccountComponent,
    ProfileComponent
  ]
})
export class AccountModule { }
