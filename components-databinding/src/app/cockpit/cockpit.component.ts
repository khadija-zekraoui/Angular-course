import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Server } from '../models/server.model';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Decorator to make a event listenable form outside
  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();
  
  // Select component (element such as en input fieled) by reference which it allows getting direct access to elements in the DOM
  // serverContentInput --> Local reference fetched  through viewChild()
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() {}

  ngOnInit(): void {
  }
  // serverNameInput --> Local references passed to methods
  onAddServer(serverNameInput: HTMLInputElement) {
    // To emit the custom event
    this.serverCreated.emit(
      new Server(
        'server',
         serverNameInput.value, // this is an HTML element
         this.serverContentInput.nativeElement.value)); // this is an element ref using @ViewChild
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // To emit the custom event
    this.blueprintCreated.emit(
      new Server(
        'blueprint',
        serverNameInput.value,
        this.serverContentInput.nativeElement.value));
  }

}
