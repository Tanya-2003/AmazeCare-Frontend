import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';  // Import the routing module
import { SharedModule } from './shared/shared.module';
//import { AuthModule } from './auth/auth.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input'; //Import for Material UI
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DoctorModule } from './doctor/doctor.module';  // Import DoctorModule
import { HomeModule } from './home/home.module';
//import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { HttpClientModule } from '@angular/common/http';
//import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    //DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,  // Use AppRoutesModule for routing
    SharedModule,
    HttpClientModule,
    //AuthModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    HomeModule,
    DoctorModule
    //DashboardModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
