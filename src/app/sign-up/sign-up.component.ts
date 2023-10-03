import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name!: string;
  email!: string;
  password!: string;

  signUp() {
    // Create a new user object
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    // Save the sign-in information in local storage
    localStorage.setItem('user', JSON.stringify(newUser));

    // Optionally, you can clear the form after saving the information
    this.name = '';
    this.email = '';
    this.password = '';

    // Handle success, such as displaying a success message or redirecting to a different page
    console.log('Sign-up successful');
  }
}
