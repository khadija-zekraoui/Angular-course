import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import UserService from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private activateSub: Subscription;

  constructor(private userSrv: UserService) {}

  ngOnInit() {
    this.activateSub = this.userSrv.onActivate.subscribe(
      (activated: boolean) => {
        this.userActivated = activated;
      }
    );
  }

  ngOnDestroy(): void {
    this.activateSub.unsubscribe();
  }
}
