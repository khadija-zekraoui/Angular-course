import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    /** The observables provided by Angular, like params, are managed by Angular and 
     *  therefore we don't need to un subscribe manually from them because Angular will take care about this */
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
