import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/accounts.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // If we want to use a new instance of AccountService we have to add it to providers
  providers: [LoggingService] //  AccountService is inherited from the parent component
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingSrv: LoggingService,
    private accountSrv: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountSrv.UpdateAccount(this.id, status);
    this.loggingSrv.logStatusChange(status);
  }
}
