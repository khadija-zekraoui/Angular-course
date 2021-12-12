import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  // In Angular a form is a a group of controls and what is FormGroup holds
  signupForm!: FormGroup;

  // Create a form and connect it to the HTML code
  //Initialize the form before rendering the template
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('female'),
    });
  }
}
