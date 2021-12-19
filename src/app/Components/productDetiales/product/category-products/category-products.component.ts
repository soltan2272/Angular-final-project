import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { ProductSearchService } from 'src/app/Services/productSearchService/product-search.service';
import { WatchListService } from 'src/app/Services/watchList/WatchListService';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  
  searchcategory!:number;
  name!:string;
  resultsearch:IndexProduct[]=[];
  firestResult:IndexProduct[]=[];

  PageNum:any;
  Page:number = 1;

  constructor(private searchservice:ProductSearchService,
              private activerouter:ActivatedRoute,
              private watch:WatchListService,
              private cart:CartService,
              private router:Router) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe(param =>{
      this.searchcategory = Number(param.get('catid'));
      this.searchservice.filterCategorysearchName(this.searchcategory).subscribe(res =>
        {
          this.firestResult = res.data;
          this.resultsearch = this.firestResult;
          this.PageNum = res.data.length;

        })
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

  filterRate(min:number,max:number){
    this.resultsearch=this.firestResult.filter(p=>p.rate>=min&&p.rate<=max);
  }
  filterPrice(min:number,max:number){
    this.resultsearch=this.firestResult.filter(p=>p.price>=min&&p.price<=max);
  }

}
