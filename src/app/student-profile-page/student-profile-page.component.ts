import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.css']
})
export class StudentProfilePageComponent implements OnInit{

  constructor(private router: Router) {
  }
  ngOnInit() {
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
