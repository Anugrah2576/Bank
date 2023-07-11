import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  text="Happy Banking With Us"
  ptext="Enter Account No"
  
  login(){
    alert("Login Submit")
  }

}
