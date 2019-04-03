import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Oidc from 'oidc-client';

@Component({
  selector: 'app-oidc-callback',
  templateUrl: './oidc-callback.component.html',
  styleUrls: ['./oidc-callback.component.sass']
})
export class OidcCallbackComponent implements OnInit {
  private oidc_mgr: Oidc.UserManager;

  constructor(private router: Router) {
    this.oidc_mgr = new Oidc.UserManager({response_mode:"query"});
  }

  ngOnInit() {
    this.oidc_mgr.signinRedirectCallback().then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
