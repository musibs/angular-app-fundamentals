import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /* template: `<app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>` ,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username: string =''
  isAllowNewServer = false
  serverCreationStatus: string = "No server created" ;
  serverName : string = 'Test Server';
  constructor() {
    setTimeout(() => {
      this.isAllowNewServer = true;
    }, 2000)
    this.isAllowNewServer = false;
  }

  ngOnInit(): void {
  }

  onCreateNewServer() {
    this.serverCreationStatus = `A server with name ${this.serverName} is provisioned with default configuration `
  }

  onServerNameUpdate(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onButtonClick() {
    this.username='';
  }
}
