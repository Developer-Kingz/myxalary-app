import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;
  error: any = null;

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit(form: NgForm) {
    // if (!form.valid) {
    //   return;
    // }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.authService.login(email, password).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      form.reset();
    }, 
    errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage
      this.isLoading = false
    });
    this.router.navigate(['/jobs/applications']);
  }
}
