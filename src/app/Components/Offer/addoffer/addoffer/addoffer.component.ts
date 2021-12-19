import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/Services/OfferService/offer.service';
import { Ioffer } from 'src/app/ViewModels/ioffer/ioffer';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.scss']
})
export class AddofferComponent implements OnInit {
  offer!:Ioffer;
  constructor(private offerservice:OfferService,private router:Router ) { }

  ngOnInit(): void {
  }

  Addoffer(){
    this.offerservice.insertOffer(this.offer).subscribe(
      (rout)=>{
        
        this.router.navigate(['/offers']);
      }
    );
  }
}
