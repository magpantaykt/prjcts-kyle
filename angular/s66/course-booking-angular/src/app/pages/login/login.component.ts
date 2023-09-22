import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '@services/session.service';
import { UserService } from '@services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    email: string = '';
    password: string = '';
    constructor(
      private userService: UserService,
      private router: Router,
      private sessionService: SessionService
      
      ){}
    ngOnInit(): void {
      // console.log("Shows upon intilization");
    }
    onSubmit(): void {
      /* 
      console.log(this.email);
      // console.log(this.password);

      // .subscribe() method used to listen to values emmitted by 'observable' which in our case in login() from userService
      */
      this.userService.login(this.email, this.password).subscribe({
        // response: Record<string, any>
          next: this.successfulLogin.bind(this),
          error: this.failedLogin.bind(this)
        // console.log(response);
      });
    }
    successfulLogin(response: Record<string, any>){
      console.log(response);
      this.sessionService.setEmail(response['email']);
      this.sessionService.setIsAdmin(response['isAdmin']);
      this.sessionService.setToken(response['token']);
      this.router.navigate(['']);
    }

    failedLogin(response: Record<string, any>){
      let data: Record<string, any> = response['error'];
      if(data['result'] === 'incorrect_credentials'){
        Swal.fire("Login Failed", "You have entered incorrect credentials, please try again.", 'error');
      }
      else if(data['result'] === 'user_not_found'){
        Swal.fire("Login Failed", "User does not exist.", 'error');
      }
      
    }


    

 
}
