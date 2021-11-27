import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  counterActive: number = 0;
  counterInactive: number = 0;

  constructor(private usersSrv: UsersService, private counterSrv: CounterService) {
    this.counterSrv.counterUpdated.subscribe(() => {
      this.counterActive = this.counterSrv.counterActive
      this.counterInactive = this.counterSrv.counterInactive
    }
  );
  }

  ngOnInit(): void {
    this.activeUsers = this.usersSrv.activeUsers;
    this.inactiveUsers = this.usersSrv.inactiveUsers;
    this.counterActive = this.counterSrv.counterActive
    this.counterInactive = this.counterSrv.counterInactive
  }
}
