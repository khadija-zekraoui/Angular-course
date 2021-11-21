import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService], // AccountService can be used by the components child of this component
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountSrv: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountSrv.accounts;
  }
} 
