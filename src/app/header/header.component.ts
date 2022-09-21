import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../logout.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName:any;
  userId:any;
  constructor(private userService : UserService , private logoutService : LogoutService) { }
  user : User = new User();
  resp:any;
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    this.userService.getUserProfile(this.userId)
    .subscribe(
      data => {
        this.resp=data;
        this.firstName=this.resp.firstName;
        this.userId=this.resp.userId;
  })
  

}
logout(){
    this.logoutService.loggedOut();
}
}
