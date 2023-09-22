import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  // @Output is a decorator used to mark a property in a component. Typicallu with EventEmitter, that allows to emit values to other components.
  @Output() hasToken: EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    if(localStorage.getItem('token') !== null){
      this.hasToken.emit(true);
    }
    else{
      this.hasToken.emit(false);
    }
  }

  setToken(value: string):void{
    localStorage.setItem('token', value);
    // emit() method is used to send a message or signal, either true or false. It lets other parts of application know whether a token exist (true) or doesn't exist (false)
    this.hasToken.emit(true);
  }

  setEmail(value: string):void{
    localStorage.setItem('email', value);
  }

  setIsAdmin(value: string):void{
    localStorage.setItem('isAdmin', value);
  }

  getToken(): string {
    // ! - asserts value will never be NULL
    return localStorage.getItem('token')!;
  } 

  getEmail(): string {
    // ! - asserts value will never be NULL
    return localStorage.getItem('email')!;
  }

  getIsAdmin(): boolean {
    // ! - asserts value will never be NULL
    return localStorage.getItem('isAdmin')! === 'true';
  }

  clear():void{
    localStorage.clear();
    this.hasToken.emit(false);
  }



}
