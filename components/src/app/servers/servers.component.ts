import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // The string used to insert this component
  templateUrl: './servers.component.html', // Template(HTML file) related to this component
  styleUrls: ['./servers.component.css']  //  Styles (CSS file) related to this component -> could be multiple
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
