import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit{
  /*
  doctorName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.doctorName = this.route.snapshot.paramMap.get('name');  // Fetching doctor's name from the route
  }
  @Input() doctor: any;

name!: string;
  doctor: any;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.doctorService.getDoctorById(id).subscribe(data => {
        this.doctor = data;
      });
    }
  }*/
    @Input() doctor: any;
    doctorName: string | null = '';
    doctorDetails: any; // Define a type based on your doctor details structure

    constructor(private route: ActivatedRoute, private doctorService: DoctorService) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.doctorName = params['name'];
            this.fetchDoctorDetails(this.doctorName);
        });
    }

    fetchDoctorDetails(name: string | null) {
        if (name) {
            this.doctorService.getDoctorByName(name).subscribe(
                details => {
                    this.doctorDetails = details;
                },
                error => {
                    console.error('Error fetching doctor details:', error);
                }
            );
        }
    }
  // Method to scroll to the form
  scrollToForm() {
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}