import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate() {
    let role = sessionStorage.getItem('userType');
    if(role=='admin'){
      return true;
    }
    alert("you don't have admin rights");
    this.router.navigate(['home']);
    return false;
  }
}
