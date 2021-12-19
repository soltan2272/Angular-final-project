import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/Services/cart/cart.service';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { WatchListService } from 'src/app/Services/watchList/WatchListService';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  indexProducts:IndexProduct[]=[];
  splitids:string[]=[];
  ids:number[]=[];
  whatchlist=new BehaviorSubject([]);

  PageNum:any;
  Page:number = 1;

  constructor(private productServes:ProductService ,
              private rout : Router,private watch:WatchListService,
              private cart:CartService) { 
  

  }

  ngOnInit(): void {

     
       this.productServes.getAllProducts().subscribe(
      (response) => {
        this.indexProducts = response.data;
        this.PageNum = response.data.length;
        
      },
      (error) => { console.log(error) }
    )
  }

  getproductditails(id : number)
  {
    this.rout.navigate(['/products/productdetails',id]);

  }

  AddWatch(p:any){ 
    
    this.watch.addtoWatchList(p);
  }
  addcart(p:any){ 
    
    this.cart.addtoCart(p);
  }
}
