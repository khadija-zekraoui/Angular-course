import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  users: string[] = [];

  constructor(private usersSrv: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersSrv.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersSrv.setToInactive(id);
  }
}
