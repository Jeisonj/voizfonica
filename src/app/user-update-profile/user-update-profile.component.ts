import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-update-profile',
  templateUrl: './user-update-profile.component.html',
  styleUrls: ['./user-update-profile.component.css']
})
export class UserUpdateProfileComponent implements OnInit {


  userName:any;
  firstName:any;
  lastName:any;
  pinCode:any;
  emailId:any;
  mobileNo:any;
  password:any;
  resp:any;
  userId:any;
  user:User = new User();


  constructor(private userService: UserService,private router:Router) { }

 

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    this.userService.getUserProfile(this.userId)
    .subscribe(
      data => {
        this.resp=data;
        console.log("Hi",this.resp.userName,data);
        this.firstName=this.resp.firstName;
        this.lastName=this.resp.lastName;
        this.userName=this.resp.userName;
        this.emailId=this.resp.emailId;
        this.mobileNo=this.resp.mobileNo;
        this.pinCode=this.resp.pinCode;
        this.userId=this.resp.userId;
  })


  }

 

  updateForm = new FormGroup({

    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    emailId: new FormControl('', [Validators.required, Validators.minLength(5)]),

    mobileNo: new FormControl('', [Validators.required, Validators.minLength(5)]),

    pinCode: new FormControl('', [Validators.required, Validators.minLength(5)]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  });
  get f(){

  return this.updateForm.controls;

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


      this.user.userName=this.userName;
      this.user.password=this.password;
      this.user.firstName=this.firstName;
      this.user.lastName=this.lastName;
      this.user.mobileNo=this.mobileNo;
      this.user.emailId=this.emailId;
      this.user.pinCode=this.pinCode;
      this.user.userId=sessionStorage.getItem('userId');
      console.log('ready data:',this.user)

    this.userService.updateUser(this.user). //this is the call to the services api endpoint .

    subscribe(data => {console.log(data);
                      
                        alert("Profile Updated");})
    
  
    }
    }