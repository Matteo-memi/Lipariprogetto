import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth'; // immagino sia da sostituire

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { username, email, password }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
