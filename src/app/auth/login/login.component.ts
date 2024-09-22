/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Adjust the import path as needed

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // or .css
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({});
   }

  ngOnInit(): void {
    // Initialize the form group with validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Extract form values
    const { email, password, rememberMe } = this.loginForm.value;

    // Call the authentication service
    this.authService.login(email, password).subscribe(
      response => {
        // Handle successful login, e.g., redirect to a different page
        console.log('Login successful:', response);
      },
      error => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}
*/

//Builder code check
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: any;
  onSubmit(form: NgForm) {
    //const email = form.value.email;
    //const password = form.value.password;
    // Call authentication service to log in the user

    // Authentication logic goes here (e.g., check credentials or call a service)

    // If login is successful, redirect to the home page
    console.log(form.value);
    this.router.navigate(['/home']);
  }
}