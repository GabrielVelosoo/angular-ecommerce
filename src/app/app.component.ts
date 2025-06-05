import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './features/auth/auth.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AuthModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
