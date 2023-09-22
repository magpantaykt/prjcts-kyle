import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '@services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // hasToken: boolean = false;
  hasToken:boolean = (localStorage.getItem('token') !== null);
  email:string = localStorage.getItem('email')!;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ){
    sessionService.hasToken.subscribe(hasToken => {
        this.hasToken = hasToken;
        this.email = this.sessionService.getEmail();
    })
  }

  // it is automatically called when a compoenent is initialized
  ngOnInit(): void {}

  logout(): void{
    // console.log("Logout button has been clicked");
    this.sessionService.clear();
    this.router.navigate(['/login']);
  }

}
