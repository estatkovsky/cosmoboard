import { Component, OnInit } from '@angular/core';
import * as Oidc from 'oidc-client';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  private oidc_mgr: Oidc.UserManager;
  private isAuthenticated: boolean;
  private data: string;

  constructor(private http: Http) {
    let settings: Oidc.UserManagerSettings = {
      authority: "http://identity.bb",
      client_id: "js",
      redirect_uri: "http://localhost:8080/oidc-callback",
      response_type: "code",
      scope: "openid profile webapi",
      post_logout_redirect_uri: "http://localhost:8080"
    };
    this.oidc_mgr = new Oidc.UserManager(settings);
    this.isAuthenticated = false;
    this.data = "";
  }

  ngOnInit() {
    this.oidc_mgr.getUser().then(user => {
      this.isAuthenticated = user !== null;
    });
  }

  login() {
    this.oidc_mgr.signinRedirect()
  }

  callApi() {
    this.oidc_mgr.getUser().then(user => {
      const url = "http://cosmo.bb/api/values";
      let requestOptions = new RequestOptions();
      requestOptions.headers = new Headers();
      requestOptions.headers.append("Authorization", `Bearer ${user.access_token}`);
      this.http.get(url, requestOptions).toPromise().then(response => {
        this.data = response.text();
      });
    });
  }

  logout() {
    this.oidc_mgr.signoutRedirect().then(() => {
      this.isAuthenticated = false;
    });
  }
}
