import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  
  private baseUrl = 'http://localhost:7577/voizfonica/';        
  constructor(private http:HttpClient) { }

  registerUser(register: object): Observable<object> {

    console.log("amit a",register)
 
     return this.http.post(`${this.baseUrl}`+'login/registerUser', register);
 
 
 
   }
   

}
