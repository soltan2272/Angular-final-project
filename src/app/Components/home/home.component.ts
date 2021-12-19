import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { WatchListService } from 'src/app/Services/watchList/WatchListService';
import { ICategory } from 'src/app/ViewModels/Category/i-category';
import { IndexProduct } from 'src/app/ViewModels/index-product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 category:ICategory[]=[];
 topRate:IndexProduct[]=[];
 newProducts:IndexProduct[]=[];
 cheapProducts:IndexProduct[]=[];
  constructor(private categoryservice:CategoryService,private productserv:ProductService,
              private router:Router,private watch:WatchListService,
              private cart:CartService){}
  ngOnInit(): void {
    this.categoryservice.getcateory().subscribe(response=>
     this.category=response.data
     )

     this.productserv.newProducts().subscribe(res=>{
       this.newProducts=res.data;
     })

     this.productserv.cheapProducts().subscribe(res=>{
      this.cheapProducts=res.data;
    })

    this.productserv.topRateProducts().subscribe(res=>{
      this.topRate=res.data;
    })
   }

   getproductditails(id : number)
   {
     this.router.navigate(['/products/productdetails',id]);
 
   }
 
   AddWatch(p:any){ 
     
     this.watch.addtoWatchList(p);
   }
   addcart(p:any){ 
     
     this.cart.addtoCart(p);
   }

}
