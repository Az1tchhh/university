import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  userEmail:string = '';
  userPassword:string = '';

  authorise(email:string, password:string){
    if(email && password){
      window.alert("success //TO-DO")
      window.location.href = "/news"
    }
    else{
      window.alert("Something went wrong")
    }
  }
}
