import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/Services/OfferService/offer.service';
import { Ioffer } from 'src/app/ViewModels/ioffer/ioffer';

@Component({
  selector: 'app-updateoffer',
  templateUrl: './updateoffer.component.html',
  styleUrls: ['./updateoffer.component.scss']
})
export class UpdateofferComponent implements OnInit {

  offer!:Ioffer;
  SelectOfferID:number=0;

  constructor(private offerservice:OfferService,private router:Router ,
              private ActivatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRouter.paramMap.subscribe(res=>{
      this.SelectOfferID = Number(res.get('offid'));
      this.offerservice.GetProdOffer(this.SelectOfferID).subscribe(result=>{
        this.offer = result.data;
      })
    })
}
  
UpdateOffer()
  {
    this.offerservice.EditOffer(this.offer);
  }
}
