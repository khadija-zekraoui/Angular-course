import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../server.interface';
import { ServersService } from '../servers.service';

// This service is used to fetch data in advance, before the component of the route is loading.
@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {
  constructor(private serverSrv: ServersService) {}

  // This method will be called by Angular when this route is loaded
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    // The returned data will be stocked in the server object that is defined in the app-routing.module.ts(resolve: { server: ServerResolver })
    return this.serverSrv.getServer(+route.params['id']); // params is not an observable here.
  }
}
