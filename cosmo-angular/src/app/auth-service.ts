import * as Oidc from 'oidc-client';

export class AuthService {
  private oidc_mgr: Oidc.UserManager;

  constructor() {
    let settings: Oidc.UserManagerSettings = {
      authority: "http://identity.bb",
      client_id: "js",
      redirect_uri: "http://localhost:8080/oidc-callback",
      response_type: "code",
      scope: "openid profile webapi",
      post_logout_redirect_uri: "http://localhost:8080"
    };
    this.oidc_mgr = new Oidc.UserManager(settings);
  }

  public getUser(): Promise<Oidc.User> {
    return this.oidc_mgr.getUser();
  }

  public login(): Promise<any> {
    return this.oidc_mgr.signinRedirect();
  }

  public logout() {
    this.oidc_mgr.signoutRedirect();
  }
}
