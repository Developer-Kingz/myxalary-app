import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { OffersComponent } from './components/offers/offers.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    JobsComponent,
    FiltersComponent,
    SidebarComponent,
    ApplicationsComponent,
    OffersComponent,
    MyJobsComponent,
    MyProfileComponent,
    MyHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
