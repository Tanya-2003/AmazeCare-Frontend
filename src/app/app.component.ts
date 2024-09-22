
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'AmazeCare';
  currentPage: string = 'login';
  selectedDoctor: any = null;
  // Function to handle selected doctor from the DoctorCard component
  onDoctorSelected(doctor: any) {
    this.selectedDoctor = doctor;
  }
}


