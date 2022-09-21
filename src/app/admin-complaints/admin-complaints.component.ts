import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-admin-complaints',
  templateUrl: './admin-complaints.component.html',
  styleUrls: ['./admin-complaints.component.css']
})
export class AdminComplaintsComponent implements OnInit {

  id :any;
  fullName:any;
  emailId:any;
  mobileNo : any;
  subject : any;
  message : any;
  statusType:any;

  customer:Customer = new Customer();
  
  resp:any;
  
  
    constructor(private customerService: CustomerService,private router:Router,private logoutService : LogoutService) { }
  
    ngOnInit(): void {
      

        this.statusType="New";
            this.customerService.getComplaint().subscribe((data: any) => {
            console.log ("Hii all")
             this.resp = data; 
           })
    }
    
    logout(){
      this.logoutService.loggedOut();
  }
  
   

}