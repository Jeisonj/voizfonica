import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../logout.service';
import { Plans } from '../plans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent implements OnInit {
  id:any;
  categoryName:any;
  commonOffers:any;
  price:any;
  dataOffers:any;
  smsOffers:any;
  istOffers:any;
  resp:any;
  plans : Plans = new Plans();
  constructor(private plansService : PlansService ,private router:Router,private logoutService : LogoutService) { }

  ngOnInit(): void {

    this.plansService.getAllPlans().subscribe((data: any) => {
      console.log ("Hii all")
       this.resp = data; 
     })
  }
  logout(){
    this.logoutService.loggedOut();
}
}
