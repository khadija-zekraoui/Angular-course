import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive',
  templateUrl: './custom-structural-directive.component.html',
  styleUrls: ['./custom-structural-directive.component.css']
})
export class CustomStructuralDirectiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = Math.floor(Math.random() * 10);

  constructor() {}

  ngOnInit(): void {}

}
