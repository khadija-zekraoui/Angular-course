import { Component } from '@angular/core';
import { Server } from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server [] = [
    new Server('server', 'TestServer', 'Just a test'),
  ];

  onServerAdded(serverData: Server) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(serverData: Server) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    });
  }

}
