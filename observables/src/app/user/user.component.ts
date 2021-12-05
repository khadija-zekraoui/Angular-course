import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import UserService from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userSrv: UserService) {}

  ngOnInit() {
    /** The observables provided by Angular, like params, are managed by Angular and
     *  therefore we don't need to un subscribe manually from them because Angular will take care of this */
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    // A subject is also an observable but we can call next from outside
    this.userSrv.onActivate.next(true);
  }
}
