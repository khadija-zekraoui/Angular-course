import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-directives',
  templateUrl: './intro-directives.component.html',
  styleUrls: ['./intro-directives.component.css'],
})
export class IntroDirectives implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  constructor() {}

  ngOnInit(): void {}
}
