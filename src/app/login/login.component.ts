import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { sha512 } from 'js-sha512';
import { AuthService } from '../shared/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:any;
  msg:any;
  password:any;

  user:User = new User();
  resp:any;
  userType:any;
  constructor(private userService: UserService,private authService: AuthService,private router:Router) { }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({

    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),


    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  });
  get f(){

    return this.loginForm.controls;

  }



  submit(){


    console.log("Amit Trying to connect TS from HTML File");
  
    this.userName=this.f['userName'].value

    this.password=this.f['password'].value
    this.password=sha512.create().update(this.password).hex();
    this.userType="User";
    this.user.userName=this.userName;

    this.user.password=this.password;
    
    this.userService.loginUser(this.user).subscribe(data => {
                console.log("Response Received");
                this.resp =data;
                if(this.resp.id==1){
                   /*  console.log("Response Received", JSON.stringify(this.resp)); */
                    sessionStorage.setItem('id',this.resp.id); 
                    sessionStorage.setItem('userId',this.resp.userId); 
                    sessionStorage.setItem('userType',this.resp.userType);
                    /* sessionStorage.setItem('userName',this.resp.userName);
                    sessionStorage.setItem('password',this.resp.password); */
                    /*  alert(sessionStorage.getItem('id'));
                    alert(sessionStorage.getItem('userType'));
                    alert(sessionStorage.getItem('userId')); */
                   /* alert(sessionStorage.getItem('userName')); */
                 /*  if(this.resp.userType==this.userType){
                    this.router.navigate(['/home'])}
                  else{
                    this.router.navigate(['/adminusers']);
                  } */
                      if(this.resp.userType==this.userType){
                        this.router.navigate(['home']);
                      }
                     else{
                      this.router.navigate(['adminusers']);
                     }
                     
                }
                else if(this.resp.id==0){
                  this.msg=this.resp.stringValue;
                }
                else{
                  this.msg=this.resp.stringValue;
                }
              },

    error => {console.log("hi",error);
      console.log("Exception Occured");
    
      this.msg="Wrong Creds";
  } 

    )

  
}
}