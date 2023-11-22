import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AttendanceWebsocketService} from "../attendance-websocket.service";

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html',
  styleUrls: ['./attendance-page.component.css']
})
export class AttendancePageComponent implements OnInit{
  stock: any = {};

  public webSocket!: WebSocket;
  attendanceStatus: string = 'false';
  constructor(private router: Router,
              private websocketService: AttendanceWebsocketService) {
    this.webSocket = new WebSocket('ws://localhost:8080/attendance-websocket');
    this.webSocket.onmessage = (event) => {
      this.stock = JSON.parse(event.data)
    };
  }
  ngOnInit() {

    // this.websocketService.getAttendanceStatus().subscribe((status) => {
    //   this.attendanceStatus = status.body.toString();
    // });
    if(!localStorage.getItem('token')){
      window.alert("You have not signed in!");
      this.router.navigate(['']);
    }
  }

  logout(){
    localStorage.removeItem('token');
    window.alert("logged out");
    window.location.href = '';
  }

}
