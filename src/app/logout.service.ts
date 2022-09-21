import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor( private router : Router) { }

  loggedOut(){
    sessionStorage.clear();
    this.router.navigate(['welcome']);
  }
}
