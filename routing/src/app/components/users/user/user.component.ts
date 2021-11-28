import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  // Inject ActivatedRoute to access to the dynamic parameter
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /**  Using snapshot, if we click a link that is part of this component(users/10/Anna)
     the user data isn't updated because the Angular by default doesn't reload the page if 
     we are in the same component even though data has been changed(in this case Angular doesn't know
     when and where data has been changed, for this reason, we have to use the observable params)*/
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'] 
    };

   /** We use observable here because the parameters of the currently loaded route might change
    at some point in the future if the user clicks the link(users/10/Anna) but we don't know when and how long it takes */ 
   this.route.params.subscribe((params: Params) => { // Angular unsubscribe automatically when this component is destroyed.
     // Update the user object every time the route parameters change
     this.user.id = params['id']
     this.user.name = params['name']
    });
  }
}
