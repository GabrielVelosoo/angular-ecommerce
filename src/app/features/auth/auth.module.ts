import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Oauth2CallbackComponent } from './components/oauth2-callback.component';

@NgModule({
  declarations: [
    RegisterComponent,
    Oauth2CallbackComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
