import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { sha512 } from 'js-sha512';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  userName:any;
  firstName:any;
  lastName:any;
  pinCode:any;
  emailId:any;
  mobileNo:any;
  password:any;
  userType:any;
  user:User = new User();
  constructor(private userService: UserService,private router:Router) { }

 

  ngOnInit(): void {

  }

 

  registerForm = new FormGroup({

    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    emailId: new FormControl('', [Validators.required, Validators.minLength(5)]),

    mobileNo: new FormControl('', [Validators.required, Validators.minLength(5)]),

    pinCode: new FormControl('', [Validators.required, Validators.minLength(5)]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  });
  get f(){

  return this.registerForm.controls;

  }

  submit(){

    console.log("Amit Trying to connect TS from HTML File");

    this.userName=this.f['userName'].value

    this.password=this.f['password'].value

    this.firstName=this.f['firstName'].value

    this.lastName=this.f['lastName'].value

    this.emailId=this.f['emailId'].value

    this.mobileNo=this.f['mobileNo'].value
   
    this.pinCode=this.f['pinCode'].value
    this.userType="user";

      this.password=sha512.create().update(this.password).hex();
      this.user.userName=this.userName;
      this.user.password=this.password;
      this.user.firstName=this.firstName;
      this.user.lastName=this.lastName;
      this.user.mobileNo=this.mobileNo;
      this.user.emailId=this.emailId;
      this.user.pinCode=this.pinCode;
      this.user.userType=this.userType;
      console.log('ready data:',this.user)

    this.userService.registerUser(this.user).//this is the call to the services api endpoint .

    subscribe(data => {console.log(data);
      alert("Registered Successfully");
    this.router.navigate(['/login'])})
  
    }
    }