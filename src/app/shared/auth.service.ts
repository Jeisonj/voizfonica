import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id:any;
  userName:any;
  password:any;
  constructor() { }
  
  isLoggedOn(){
    this.id=sessionStorage.getItem('id');
   if(this.id==1){
     return true;
   }
   return false;
   
  }
}
