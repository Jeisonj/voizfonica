import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LogoutService } from '../logout.service';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  id:any;
  userName:any;
  firstName:any;
  lastName:any;
  pinCode:any;
  emailId:any;
  mobileNo:any;
  password:any;

  user:User = new User();
  userType:any;
  resp:any;
  
  
    constructor(private userService: UserService,private router:Router,private logoutService : LogoutService) { }
  
    ngOnInit(): void {
      

        this.userType="User";
            this.userService.getUser().subscribe((data: any) => {
            console.log ("Hii all")
             this.resp = data; 
             console.log("hi",this.resp)
             if(this.resp.userType==this.userType){
              this.resp = data; 
              
             }
           })
           
    }
    
    print() {
      window.print();
      }
  
   
  
  
  //DELETE
  
  deletedata(id:any){

    //Add some Logic here to delete the
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.userService.getUser().subscribe(data =>{
          this.resp =data;
          })
      },
      error => console.log(error));
  }
  logout(){
    this.logoutService.loggedOut();
}
}