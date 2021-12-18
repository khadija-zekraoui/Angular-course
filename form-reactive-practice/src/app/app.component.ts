import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './custom-validators';

interface Project {
  projectName: string;
  email: string;
  projectStatus: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm!: FormGroup;
  isSubmitted: boolean = false;
  project: Project;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        Validators.required,
        CustomValidators.forbiddenProjectNames.bind(this)
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });

    this.project = {
      projectName: '',
      email: '',
      projectStatus: '',
    };
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(
      ': AppComponent -> onSubmit -> this.projectForm',
      this.projectForm
    );
    this.project['projectName'] = this.projectForm.get('projectName').value;
    this.project['email'] = this.projectForm.get('email').value;
    this.project['projectStatus'] = this.projectForm.get('projectStatus').value;
    this.projectForm.reset();
  }

  getNameValidation() {
    if (this.projectForm.get('projectName').errors) {
      return this.projectForm.get('projectName').errors[
        'projectNameIsForbidden'
      ];
    } else {
      return false;
    }
  }
}
