import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:7577/voizfonica/';        


  constructor(private http:HttpClient) { }

  customerComplaint(customer: object): Observable<object> {

    console.log("amit a",customer)
 
     return this.http.post(`${this.baseUrl}`+'login/complaints', customer);
 
 
 
   }

   getComplaint(): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'admin/getAllComplaints');

   }
}
