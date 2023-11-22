import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit{

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
