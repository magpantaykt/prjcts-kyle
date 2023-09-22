import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    email: String = '';
    password: String = '';

    constructor(){}

    ngOnInit(): void {
      // console.log("Shows upon intilization");
    }

    onSubmit(): void {
      console.log(this.email);
      console.log(this.password);
    }
 
}
