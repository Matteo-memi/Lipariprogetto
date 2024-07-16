import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo per creare un evento
  createEvent() {
    // Logica per creare un evento
  }

  // Metodo per modificare un evento
  updateEvent() {
    // Logica per modificare un evento
  }
}
