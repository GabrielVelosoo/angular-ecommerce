import { Component } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuAberto: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  entrar() {
    this.authService.login().then();
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
