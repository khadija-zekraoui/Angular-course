import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Inject router
  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // Doing somethings and navigating to another page

    // Access to Angular router by injecting it in the constructor
    // this.router.navigate(['/servers']); // It is an absolute path to get to the servers page
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:'loading'}); 
  }

  onLogin(){
    this.authSrv.login();
  }

  onLogout() {
    this.authSrv.logout();
  }
}
