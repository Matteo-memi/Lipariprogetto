import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth'; // Base URL del backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    console.log('Login request:', { email, password }); // Logging della richiesta
    return this.http.post(url, { email, password }).pipe(
      catchError(this.handleError)
    );
  }

  register(user: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    console.log('Register request:', user); // Logging della richiesta
    return this.http.post(url, user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Errore nel servizio Auth:', error);
    return throwError(error);
  }
}

