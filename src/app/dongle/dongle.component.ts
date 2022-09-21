import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {
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
    this.plansService.getAllDonglePlans().subscribe((data: any) => {
      console.log ("Hii all",data);
      this.resp=data;
      
     })

}

}
