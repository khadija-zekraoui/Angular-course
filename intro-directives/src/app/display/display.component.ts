import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  displyDetails:boolean = false;
  clickes: number[]  = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDisplyDetails() {
    this.displyDetails = !this.displyDetails;
    this.clickes.push(this.clickes.length+1);
  }

  getColor() {
    return 'blue';
  }

}
