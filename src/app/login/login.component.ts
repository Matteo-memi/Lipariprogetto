import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        this.successMessage = 'Login effettuato con successo!';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000); // Reindirizza alla home dopo 2 secondi
      },
      error => {
        this.errorMessage = 'Errore durante il login. Controlla le tue credenziali.';
        this.successMessage = '';
      }
    );
  }
}


