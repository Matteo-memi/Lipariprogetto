import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.username, this.email, this.password).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error during registration:', error);
        this.errorMessage = 'Registrazione fallita. Per favore riprova.';
      }
    );
  }
}

