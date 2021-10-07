import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  
  displyDetails:boolean = false;
  clickes: Date[]  = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDisplyDetails() {
    this.displyDetails = !this.displyDetails;
    this.clickes.push(new Date());
  }

  getColor() {
    return 'blue';
  }

}
