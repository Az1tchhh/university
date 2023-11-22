import { Component } from '@angular/core';
import {AuthorizationService} from "../authorization.service";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  userEmail:string = '';
  userPassword:string = '';

  constructor(private authService: AuthorizationService,
              private router: Router) {
  }
  authorise(email:string, password:string){
    if(email && password){
      this.authService.login(email, password).subscribe(
        data=> {
          console.log(data);
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          this.authService.getUser(email).subscribe(
            data=>{
              if(data.firstName){
                localStorage.setItem('firstName', data.firstName)
                localStorage.setItem('lastName', data.lastName)
                localStorage.setItem('userId', data.id.toString())
                localStorage.setItem('role', data.role)
              }
              setTimeout( function (){
                window.location.href = '/main';
              }, 2000)
            },
            error => {
              window.alert("You have entered wrong credentials!")
            }
          )
        });
    }
    else{
      window.alert("Something went wrong")
    }
  }

  logout(){
    localStorage.removeItem('token');
    window.alert("logged out");
    window.location.href = '';
  }

}
