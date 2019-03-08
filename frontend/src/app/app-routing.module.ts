import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AdminComponent } from './admin';
import { LoginGuard } from './guard';
import { GuestGuard, AdminGuard } from './guard';
import { NotFoundComponent } from './not-found';
import { ChangePasswordComponent } from './change-password';
import { ForbiddenComponent } from './forbidden';
import { SignupComponent } from './signup';
import {LobbyComponent} from "./lobby/lobby.component";
import {UpcomingEntriesComponent} from "./upcoming-entries/upcoming-entries.component";
import {LiveEntriesComponent} from "./live-entries/live-entries.component";
import {CompletedEntriesComponent} from "./completed-entries/completed-entries.component";
import {NumbersComponent} from "./numbers/numbers.component";
import {AccountDetailsComponent} from "./account-details/account-details.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'lobby',
    component: LobbyComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'upcoming',
    component: UpcomingEntriesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'live',
    component: LiveEntriesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'completed',
    component: CompletedEntriesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'numbers',
    component: NumbersComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'account',
    component: AccountDetailsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
