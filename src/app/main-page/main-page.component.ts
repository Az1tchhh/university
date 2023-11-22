import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {UserInfo} from "../models/UserInfo";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  namee: string = ""
  role:string = ""
  constructor(private router: Router) {
  }
  ngOnInit() {
    const firstName = localStorage.getItem('firstName');
    const role = localStorage.getItem('role');
    if(firstName && role){
      this.namee = firstName;
      this.role = role;
    }
    console.log(this.namee);
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
