import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    private apiUrl = 'https://api.example.com/doctors'; // Replace with your actual API URL

    constructor(private http: HttpClient) {}

    getDoctorByName(name: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}?name=${encodeURIComponent(name)}`);
    }
}
