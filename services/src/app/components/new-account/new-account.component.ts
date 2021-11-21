import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/accounts.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // If we want to use a new instance of AccountService we have to add it to providers
  providers: [LoggingService] //  AccountService is inherited from the parent component
})
export class NewAccountComponent {
  constructor(
    private loggingSer: LoggingService,
    private accountSrv: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountSrv.addAccount(accountName, accountStatus);
    this.loggingSer.logStatusChange(accountStatus);
  }
}
