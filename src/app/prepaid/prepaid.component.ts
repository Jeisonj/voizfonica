import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {
  planId:any;
  validity:any;
  category:any;
  commonOffers:any;
  price:any;
  dataOffers:any;
  smsOffers:any;
  istOffers:any;
  resp:any;
  plans : Plans = new Plans();
  constructor(private plansService : PlansService ,private router:Router) { }

  ngOnInit(): void {
   
    this.plansService.getAllPrepaidPlans().subscribe((data: any) => {
      console.log ("Hii all",data);
      this.resp=data;
      
     })
  }
}
