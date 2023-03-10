import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './components/applications/applications.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsComponent } from './pages/details/details.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountCreatedComponent } from './pages/account-created/account-created.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account-created', component: AccountCreatedComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: 'new-password', component: NewPasswordComponent},
  { path: 'jobs', component: JobsComponent, children: [
    { path: 'applications', component: ApplicationsComponent },
    { path: 'applications/:id', component: DetailsComponent },
    { path: 'offers', component: OffersComponent},
    { path: 'my-jobs', component: MyJobsComponent},
    { path: 'my-profile', component: MyProfileComponent},
    { path: 'my-history', component: MyHistoryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
