import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private usersSrv: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersSrv.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersSrv.setToActive(id);
  }
}
