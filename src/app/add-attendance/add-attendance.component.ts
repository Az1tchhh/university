import { Component } from '@angular/core';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent {


  logout(){
    localStorage.removeItem('token');
    window.alert("logged out");
    window.location.href = '';
  }
}
