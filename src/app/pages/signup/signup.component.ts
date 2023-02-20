import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;
  error: any = null;

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    this.isLoading = true;

    this.authService.signup(email, password, confirmPassword).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      form.reset();
    }, 
    errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage
      this.isLoading = false
    });
    this.router.navigate(['/login']);
  }
}

