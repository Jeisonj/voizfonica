import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  
  private baseUrl = 'http://localhost:7577/voizfonica/';        
  constructor(private http:HttpClient) { }

  registerUser(register: object): Observable<object> {

    console.log("amit a",register)
 
     return this.http.post(`${this.baseUrl}`+'login/registerUser', register);
 
 
 
   }
   loginUser(login: object): Observable<object> {

 
    return this.http.post(`${this.baseUrl}`+'login/doLogin', login);


  }
  updateUser(register: object): Observable<object> {

    console.log("amit a",register)
    
     return this.http.post(`${this.baseUrl}`+'user/updateUserProfile', register,);
 
 
 
   }

  getUser(): Observable<object> {

 
    return this.http.get(`${this.baseUrl}`+'admin/getusers'); 

 
   }
   deleteUser(id: number): Observable<any> {



    return this.http.delete(`${this.baseUrl}admin/deleteusers/${id}`, { responseType: 'text' });
  
  
  
  }
  getUserProfile(userId: any): Observable<any> {
    
    let headers = new HttpHeaders().append('userId', userId);
    return this.http.get(`${this.baseUrl}user/getUserProfile?userId=`+userId, { headers: headers}); 

 
   }

}
