import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email!: string;
  password!: string;

  signIn() {
    // Perform sign-in logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}

// Retrieve the sign-in information from local storage
const savedUser = localStorage.getItem('user');

if (savedUser) {
  const user = JSON.parse(savedUser);
  console.log('Saved user:', user);
} else {
  console.log('No sign-in information found');
}
