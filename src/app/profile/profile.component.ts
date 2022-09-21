import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User=new User();
  firstName:any;
  lastName:any;
  mobileNo:any;
  emailId:any;
  plan:any;
  resp:any;
  userId:any;
  category:any;
  constructor( private userService :UserService ) { }

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    this.userService.getUserProfile(this.userId)
    .subscribe(
      data => {
        this.resp=data;
        if(this.resp.id!=0){
          this.firstName=this.resp.firstName;
          this.lastName=this.resp.lastName;
          this.emailId=this.resp.emailId;
          this.mobileNo=this.resp.mobileNo;
          this.userId=this.resp.userId;
          this.category=this.resp.price;
          this.plan=this.resp.categoryName;
        } else {
          console.log(this.resp.stringValue);
        }
        
  })

  }

}
