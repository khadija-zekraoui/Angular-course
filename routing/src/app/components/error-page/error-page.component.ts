import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message']; // retrieve the static data from route
    this.route.data.subscribe((data: Data) => {
      // if data changes when we still in this component
      this.errorMessage = data['message'];
    });
  }
}
