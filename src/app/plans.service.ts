import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private baseUrl = 'http://localhost:7577/voizfonica/';  
  constructor(private http:HttpClient ) { }

  getAllPlans() : Observable<any>{
    return this.http.get(`${this.baseUrl}`+'plans/getAllPlans');
  }
  getAllPrepaidPlans() : Observable<any>{
    return this.http.get(`${this.baseUrl}`+'plans/getAllPrepaidPlans');
  }
  getAllPostpaidPlans() : Observable<any>{
    return this.http.get(`${this.baseUrl}`+'plans/getAllPostpaidPlans');
  }
  getAllDonglePlans() : Observable<any>{
    return this.http.get(`${this.baseUrl}`+'plans/getAllDonglePlans');
  }


}
