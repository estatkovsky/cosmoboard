import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OidcCallbackComponent } from './oidc-callback/oidc-callback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oidc-callback', component: OidcCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
