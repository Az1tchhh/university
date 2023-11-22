import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserInfo} from "./models/UserInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  static userInfo: UserInfo;

  constructor(private router: Router) {

  }
  ngOnInit() {

  }
  title = 'university';
}
