import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['Anna', 'Chris'];

  // In Angular a form is a a group of controls and what is FormGroup holds
  signupForm!: FormGroup;

  // Create a form and connect it to the HTML code
  // Initialize the form before rendering the template
  // With Validators.required we only pass the reference to this method and Angular will execute it whenever it detects changes in this input
  // we can use FormGroup inside another FormGroup to create a nested form
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails.bind(this)
        ),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    // bind this because Angular will call this.forbiddenNames()
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, [Validators.required])
    );
  }

  onSubmit() {
    console.log(
      'file: app.component.ts ~ line 26 ~ AppComponent ~ onSubmit ~ this.signupForm',
      this.signupForm
    );

    this.signupForm.get('gender').reset();
  }

  // Is a custom validator
  // It needs to receive an argument which is the control it should check
  // It has to return an object respecting a specific syntax {key: boolean}
  forbiddenNames(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      // -1 means true
      return { nameIsForbidden: true };
    }
    return null; // this tells angular the condition is valid
  }

  // Asynchronous validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.includes('test')) {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
