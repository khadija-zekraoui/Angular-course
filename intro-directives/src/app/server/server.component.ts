import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  
  serverName = '';
  serverStatus = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!!';
  serverCreated: boolean = false;
  servers = [{name:'Lunaserver'},{name:'SunServer'}];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push({name: this.serverName});
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
