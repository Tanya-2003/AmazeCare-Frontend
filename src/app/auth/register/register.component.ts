import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    // Signup logic goes here (e.g., register the user via a service)

    // If signup is successful, redirect to the home page
    this.router.navigate(['/home']);
  }
}
