import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/Services/OfferService/offer.service';
import { Ioffer } from 'src/app/ViewModels/ioffer/ioffer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offer:Ioffer[]=[];

  PageNum:any;
  Page:number = 1;

  constructor(private offerService:OfferService , private rout:Router) { }

  ngOnInit(): void {
    this.offerService.GetAllOffer().subscribe(res=>
      {
        this.offer=res.data;
        this.PageNum = res.data.length;
      })
  }
  AddOffer()
  {
    this.rout.navigate(['/addoffer']);
  }

  deleteoffer(id:number){
    this.offerService.DeleteOffer(id).subscribe(
      res=>console.log(res)
    );
  }


}
