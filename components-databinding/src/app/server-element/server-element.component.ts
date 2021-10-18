import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from '../models/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // By default, Angular encapsulate CSS style that means that every
  // component has its style, like private attributes. 
  // this flowing line disable this default behavior
  encapsulation: ViewEncapsulation.None

})
export class ServerElementComponent implements OnInit {
  
  // decorator to make a property bindale from outside
  @Input('serverElement') element: Server | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
