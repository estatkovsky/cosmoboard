import { Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
  isAuthenticated: boolean;

  constructor(authService: AuthService) {
    this.isAuthenticated = false;
    authService.getUser().then(user => {
      this.isAuthenticated = user !== null;
      if (!this.isAuthenticated) {
        authService.login();
      }
    });
  }
}
