import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  eventCategories: string[] = [];
  cities: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventCategories();
    this.getCities();
  }

  getEventCategories(): void {
    this.http.get<string[]>('http://localhost:8080/event/category/all-events')  // Inserire l'endpoint corretto qui
      .subscribe(
        (data) => this.eventCategories = data,
        (error) => console.error('Errore nel caricamento delle categorie di eventi', error)
      );
  }

  getCities(): void {
    this.http.get<string[]>('localhost:8080/location/all')  // Inserire l'endpoint corretto qui
      .subscribe(
        (data) => this.cities = data,
        (error) => console.error('Errore nel caricamento delle città', error)
      );
  }
}
