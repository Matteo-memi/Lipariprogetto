import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage = 'Credenziali non valide. Per favore riprova.';
      }
    );
  }
}


