import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServer = false
  serverName = ''
  serverStatus = false
  servers = ['test-server 1', 'test-server 2']

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  onCreationServer(){
    this.servers.push(this.serverName)
    this.serverStatus = true    
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
