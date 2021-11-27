import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

// @Injectable() // Added to the service that needs another service (dependency)

@Injectable({
  providedIn: 'root', // There is no need to add it to the providers of app.module.ts
})
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingSrv: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingSrv.logStatusChange(status);
  }

  UpdateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingSrv.logStatusChange(status);
    this.statusUpdated.emit(status);
  }
}
