import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { WatchListService } from 'src/app/Services/watchList/WatchListService';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  products:any=[];
  count:number=0;
  constructor(private watch:WatchListService,
              private cart:CartService,
              private route:Router) { }

  ngOnInit(): void {
    this.watch.getProducts().subscribe(res=>{
      this.products=res;
   });

   this.watch.getcount().subscribe(res=>
    this.count=res
    )
    
  }

  delete(p:any){
    this.watch.removeWatchListItem(p); 
  }

  getproductditails(id : number)
  {
    this.route.navigate(['/products/productdetails',id]);

  }
  addcart(p:any){ 
    
    this.cart.addtoCart(p);
  }
}
