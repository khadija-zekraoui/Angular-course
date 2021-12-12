import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  // Initialize the form before rendering the template
  // With Validators.required we only pass the reference to this method and Angular will execute it whenever it detects changes in this input
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
    });
  }

  onSubmit() {
    console.log("file: app.component.ts ~ line 26 ~ AppComponent ~ onSubmit ~ this.signupForm", this.signupForm)
  }
}
