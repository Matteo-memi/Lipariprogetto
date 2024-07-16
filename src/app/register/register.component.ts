import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  taxIdCode: string = '';
  city: string = '';
  phone: string = '';
  gender: string = '';
  birthDate: string = '';
  stageName: string = '';
  type: string = '';
  role: string = 'customer'; // Ruolo selezionato (default: customer)

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onRegister(form: NgForm): void {
    let registerData: any = {
      email: this.email,
      password: this.password,
      roles: [this.role]
    };

    if (this.role === 'customer') {
      registerData.customer = {
        name: this.name,
        surname: this.surname,
        taxIdCode: this.taxIdCode,
        city: this.city,
        phone: this.phone,
        gender: this.gender,
        birthDate: this.birthDate
      };
    } else if (this.role === 'entertainer') {
      registerData.entertainer = {
        stageName: this.stageName,
        type: this.type
      };
    }

    this.authService.register(registerData).subscribe(
      response => {
        this.successMessage = 'Registrazione avvenuta con successo!';
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Errore durante la registrazione. Riprova.';
        this.successMessage = '';
      }
    );
  }
}
