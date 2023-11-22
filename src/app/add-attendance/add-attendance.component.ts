import {Component, OnInit} from '@angular/core';
import {AttendanceWebsocketService} from "../attendance-websocket.service";

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit{
  attendanceId!:number
  constructor(private attService: AttendanceWebsocketService) {
  }
  logout(){
    localStorage.removeItem('token');
    window.alert("logged out");
    window.location.href = '';
  }

  ngOnInit() {

  }
  startAtt(){
    this.attService.postAttendance().subscribe(

    )
  }
}
