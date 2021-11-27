import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  // Inject  ActivatedRoute => gives the currently active page
  constructor(private serversService: ServersService, 
              private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers']); // relative path Incorrect to reload servers page, but doesn't cause any errors because it doesn't know the currently active route

    // To use relative routing it's necessary to add a configuration to set the current page
    // this.router.navigate(['servers'], {relativeTo: this.route}); // Triggers an error because localhost:4200/servers/servers doesn't exist as a route in the configuration routing
    
    this.router.navigate(['/servers']); // absolute path Works !!!
  }

}
