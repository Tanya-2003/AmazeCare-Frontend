import { Component, HostListener, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

interface Doctor {
  name: string;
  speciality: string;
  image: string;
  departmentAvatar: string;
}

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss'
})
export class DoctorCardComponent implements OnInit{
  selectedSpeciality: string = '';
  sortOrder: string = 'asc';

  specialities: string[] = [
    'Cancer Care', 'Cardiology', 'Pediatrician', 
    'Dental Care','General Surgery','Kidney Care',
    'Long Term Acute Care','Neurosurgery','Radiation Oncology',
    'Stroke Care','Women Health'
  ];

  doctors : Doctor[] = [
    { name: 'Shaun Murphy', speciality: 'Cancer Care', image: 'assets/doctor-card/shawn.jpg', departmentAvatar: 'assets/doctor-card/cancer-care.png' },
    { name: 'Marcel Andrew', speciality: 'Cardiology', image: 'assets/doctor-card/andrew.jpg', departmentAvatar: 'assets/doctor-card/cardiology.png' },
    { name: 'Asher Lupin', speciality: 'Pediatrician', image: 'assets/doctor-card/asher.jpg', departmentAvatar: 'assets/doctor-card/newborn-services.png' },
    { name: 'Charlie Smith', speciality: 'Dental Care', image: 'assets/doctor-card/charlie.jpg', departmentAvatar: 'assets/doctor-card/dental-care.png' },
    { name: 'Christina Young', speciality: 'General Surgery', image: 'assets/doctor-card/christina-yang.jpg', departmentAvatar: 'assets/doctor-card/general-surgery.png' },
    { name: 'Claire Brown', speciality: 'Kidney Care', image: 'assets/doctor-card/claire.jpg', departmentAvatar: 'assets/doctor-card/kidney-care.png' },
    { name: 'Ellen Pompeo', speciality: 'Long Term Acute Care', image: 'assets/doctor-card/ellen-pompeo.jpg', departmentAvatar: 'assets/doctor-card/long-term-acute-care.png' },
    { name: 'Jared Kalu', speciality: 'Neurosurgery', image: 'assets/doctor-card/jared.jpg', departmentAvatar: 'assets/doctor-card/neurosurgery.png' },
    { name: 'Jordan Smith', speciality: 'Radiation Oncology', image: 'assets/doctor-card/jordan.png', departmentAvatar: 'assets/doctor-card/radiation-oncology.png' },
    { name: 'Leah Dilalo', speciality: 'Stroke Care', image: 'assets/doctor-card/leah.jpeg', departmentAvatar: 'assets/doctor-card/stroke-care.png' },
    { name: 'Andrew Lim', speciality: 'Women Health', image: 'assets/doctor-card/lim.jpg', departmentAvatar: 'assets/doctor-card/women-health.png' },
    { name: 'Nike Melendez', speciality: 'Radiation Oncology', image: 'assets/doctor-card/melendez.jpg', departmentAvatar: 'assets/doctor-card/radiation-oncology.png' },
    { name: 'Meredith Grey', speciality: 'Radiation Oncology', image: 'assets/doctor-card/meredith-grey.jpg', departmentAvatar: 'assets/doctor-card/radiation-oncology.png' },
    { name: 'Glen Morgan', speciality: 'Cancer Care', image: 'assets/doctor-card/morgan.jpeg', departmentAvatar: 'assets/doctor-card/cancer-care.png' },
    { name: 'Patrick Dempsey', speciality: 'Cardiologist', image: 'assets/doctor-card/patrick-dempsey.jpg', departmentAvatar: 'assets/doctor-card/cardiology.png' },
    { name: 'Sarah Drew', speciality: 'General Surgery', image: 'assets/doctor-card/sarah-drew.jpg', departmentAvatar: 'assets/doctor-card/general-surgery.png' },
  ];

  filteredDoctors: Doctor[] = [];
  currentCount = 6; 
  loading = false;
  endMessage: string = ''; 
  endReached = false; // Track if end has been reached

  ngOnInit(): void {
    this.loadInitialDoctors();
  }

  loadInitialDoctors() {
    this.filteredDoctors = this.doctors.slice(0, this.currentCount);
    this.endMessage = ''; // Reset end message
    this.endReached = false; // Reset end reached status
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const bottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1;
    if (bottom && !this.loading && !this.endReached) {
      console.log("Bottom reached! Loading more doctors...");
      this.loadMoreDoctors();
    }
  }

  loadMoreDoctors() {
    this.loading = true;
    // Simulate a loading delay
    setTimeout(() => {
      const moreDoctors = this.doctors.slice(this.currentCount, this.currentCount + 6);
      if (moreDoctors.length) {
        this.filteredDoctors.push(...moreDoctors);
        this.currentCount += 6;
        this.endMessage = ''; // Reset end message
      } else {
        this.endMessage = 'You have reached the end'; 
        this.endReached = true; // Mark as end reached
      }
      this.loading = false; // Hide loading indicator after loaded
    }, 3000); //Delay
  }

  filterDoctors() {
    if (this.selectedSpeciality) {
      this.filteredDoctors = this.doctors.filter(doc => doc.speciality === this.selectedSpeciality).slice(0, this.currentCount);
      this.endMessage = ''; // Reset end message
      this.endReached = false; // Reset end reached status
    } else {
      this.loadInitialDoctors(); // Reset to initial load
    }
  }

  sortDoctors() {
    this.filteredDoctors.sort((a, b) => {
      return this.sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
  }

  @Output() doctorSelected = new EventEmitter<any>();

  // Call this method when a doctor is selected (e.g., on card click)
  selectDoctor(doctor: any) {
    this.doctorSelected.emit(doctor);
  }
  /*@Input() doctor: any;

  constructor(private router: Router) {}

  onDoctorClick() {
    this.router.navigate(['/doctor', this.doctor.name]);
  }

  viewDoctorDetails(doctorName: string): void {
    // This will navigate to the doctor details page with the name as a parameter
    this.router.navigate(['/doctor', doctorName]);
  }*/
    @Input() doctor: { name: string; } | undefined;

    constructor(private router: Router) {}

    goToDoctorDetails(name: string) {
        const encodedName = encodeURIComponent(name);
        this.router.navigate(['/doctor-details'], { queryParams: { name: encodedName } });
    }
}

