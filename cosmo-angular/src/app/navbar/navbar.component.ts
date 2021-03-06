import { Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
