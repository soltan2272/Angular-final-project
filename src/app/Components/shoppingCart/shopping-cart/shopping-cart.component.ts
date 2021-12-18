import { NumberSymbol } from '@angular/common';
import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit ,OnChanges{

  products:IndexProduct[]=[];
  count:number=0;
  totalPrices:number[]=[];
  totalprice:number=0;
  getTotalPrice:number=0;
  constructor(private cart:CartService,
              private route:Router) { }
  ngOnChanges(): void {
     }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.products=res;
      

   });

   this.cart.getcount().subscribe(res=>
    this.count=res
    )
    this.cart.getTotalPrice().subscribe(res=>{
      this.getTotalPrice=res;
      this.totalprice= this.getTotalPrice;
    })

    
    
   
  }

  delete(p:IndexProduct){
    this.cart.removeCartItem(p); 
  }

  emptyCart(){
    this.cart.rewoveAllItems(); 
  }

calcTotal(qun:any,price:NumberSymbol,i:number){
  qun as ElementRef;
  let quantity =qun.value as number;
 
  this.totalPrices[i]=quantity*price;
  if(this.totalPrices[i]==0)
  this.totalPrices[i]=price;

  this.totalprice=this.getTotalPrice-price+this.totalPrices[i];

}
  getproductditails(id : number)
  {
    this.route.navigate(['/products/productdetails',id]);

  }

  checkout(){

    this.route.navigate(['/payment']);
    this.cart.setTotalPricepayment(this.totalprice);

  }
  
}



