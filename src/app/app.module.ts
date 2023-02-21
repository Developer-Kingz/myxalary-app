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
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spiner/loading-spinner.component';
import { AboutComponent } from './modals/about/about.component';
import { ExperienceComponent } from './modals/experience/experience.component';
import { ProjectsComponent } from './modals/projects/projects.component';
import { EducationComponent } from './modals/education/education.component';
import { DocumentsComponent } from './modals/documents/documents.component';

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
    MyHistoryComponent,
    EditInfoComponent,
    DetailsComponent,
    LoadingSpinnerComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
