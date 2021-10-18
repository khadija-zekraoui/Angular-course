import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    // To emit the custom event
    this.serverCreated.emit(new Server('server', this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    // To emit the custom event
    this.blueprintCreated.emit(new Server('blueprint', this.newServerName, this.newServerContent));
  }

}
