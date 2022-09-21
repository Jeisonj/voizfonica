import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {
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
    
    this.plansService.getAllPostpaidPlans().subscribe((data: any) => {
      console.log ("Hii all",data);
      this.resp=data;
      
     })

}
}
