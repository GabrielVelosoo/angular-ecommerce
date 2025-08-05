import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

  constructor(
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
  }
}
