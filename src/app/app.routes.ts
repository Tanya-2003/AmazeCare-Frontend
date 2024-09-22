import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorCardComponent } from './home/doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';

import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'doctor-details', component: DoctorDetailsComponent },
  //  { path: 'home', component: HomeComponent }, 
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { path: 'doctors', component: DoctorCardComponent }, // Route for doctor list
  //{ path: 'login', component: LoginComponent },
  //{ path: 'signup', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
