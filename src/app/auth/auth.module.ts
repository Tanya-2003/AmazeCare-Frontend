import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import Angular Material Form Field Module
import { MatInputModule } from '@angular/material/input'; // Import Angular Material Input Module
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import Angular Material Checkbox Module
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button Module
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
//import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    MatFormFieldModule, // Add Angular Material Form Field Module
    MatInputModule, // Add Angular Material Input Module
    MatCheckboxModule, // Add Angular Material Checkbox Module
    MatButtonModule,
    FormsModule,
    //AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
