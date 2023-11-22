import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.css']
})
export class TeachersPageComponent implements OnInit{

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
    window.location.href = ''
  }

}
