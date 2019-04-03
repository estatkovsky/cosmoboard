import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  private data: string = "";

  constructor(private authService: AuthService, private http: Http) {
  }

  callApi() {
    this.authService.getUser().then(user => {
      if (user !== null) {
        const url = "http://cosmo.bb/api/values";
        let requestOptions = new RequestOptions();
        requestOptions.headers = new Headers();
        requestOptions.headers.append("Authorization", `Bearer ${user.access_token}`);
        this.http.get(url, requestOptions).toPromise().then(response => {
          this.data = response.text();
        });
      }
    });
  }
}
