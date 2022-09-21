import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    
    fullName:any;
    emailId:any;
    mobileNo : any;
    subject : any;
    message : any;

    customer : Customer = new Customer();
  constructor(private customerService: CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  complaintForm = new FormGroup({

    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    mobileNo: new FormControl('', [Validators.required, Validators.minLength(5)]),

    emailId: new FormControl('', [Validators.required, Validators.minLength(5)]),

    subject: new FormControl('', [Validators.required, Validators.minLength(5)]),

    message: new FormControl('', [Validators.required, Validators.minLength(5)]),


  });
  get f(){

    return this.complaintForm.controls;
  
    }
    
  submit(){

    console.log("Amit Trying to connect TS from HTML File");

    this.fullName=this.f['fullName'].value

    this.message=this.f['message'].value

    this.subject=this.f['subject'].value

    this.emailId=this.f['emailId'].value

    this.mobileNo=this.f['mobileNo'].value
   

      this.customer.fullName=this.fullName;
      this.customer.subject=this.subject;
      this.customer.message=this.message;
      this.customer.mobileNo=this.mobileNo;
      this.customer.emailId=this.emailId;

      console.log('ready data:',this.customer)

    this.customerService.customerComplaint(this.customer). //this is the call to the services api endpoint .

    subscribe(data => {console.log(data);})

    alert("You filed a complaint");
    this.router.navigate(['welcome']);
  
    }
}
