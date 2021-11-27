import { Injectable } from '@angular/core';

// Normally added to the service that needs another service (dependency)
// But it is a good practice to add it to all services
// @Injectable()

@Injectable({
  providedIn: 'root', // There is no need to add it to the providers of app.module.ts
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
