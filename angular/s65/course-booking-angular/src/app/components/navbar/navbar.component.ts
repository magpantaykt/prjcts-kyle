import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  hasToken: boolean = false;

  constructor(){}

  // it is automatically called when a compoenent is initialized
  ngOnInit(): void {}

  logout(): void{
    console.log("Logout button has been clicked");
  }

}
