import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Server } from '../server.interface';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //Retrieve data using dynamic Data with the resolve Guard
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });

    //Retrieve data from ServerService
    // this.server = this.serversService.getServer(
    //   +this.route.snapshot.params['id']
    // ); // + to parse the id from string to number
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(
    //     +this.route.snapshot.params['id']
    //   );
    // });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route, // Active page with parameters is http://localhost:4200/servers/1?allowEdit=0#loading
      queryParamsHandling: 'preserve', //Preserve current parameters (retrieves query parameters from the active route and pass them to the new one)
    });
  }
}
