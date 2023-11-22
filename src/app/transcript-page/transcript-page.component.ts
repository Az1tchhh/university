import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transcript-page',
  templateUrl: './transcript-page.component.html',
  styleUrls: ['./transcript-page.component.css']
})
export class TranscriptPageComponent implements OnInit{

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
