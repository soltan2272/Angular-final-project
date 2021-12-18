import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { LoginService } from 'src/app/Services/User/login.service';
import { WatchListService } from 'src/app/Services/watchList/WatchListService';
import { ICategory } from 'src/app/ViewModels/Category/i-category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,OnChanges{
  categorylist: ICategory[] = [];
  watchlistnumber!: number;
  cartnumber!: number;
  totalPrice!: number;

  isUsrLoggd:boolean=false;

  constructor(private router: Router,
    private category: CategoryService,
    private watch: WatchListService,
    private cart: CartService,
    private loginservice:LoginService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.loginservice.isUserlogged.subscribe(
      {
        next:(res)=>{
          this.isUsrLoggd=res.valueOf();
        }
      }
    )
  }

  ngOnInit(): void {
    this.category.getcateory().subscribe(response => {
      this.categorylist = response.data;
    })
    this.watch.getcount().subscribe(res =>
      this.watchlistnumber = res);

    this.cart.getcount().subscribe(res =>
      this.cartnumber = res);

    this.cart.getTotalPrice().subscribe(res =>
      this.totalPrice = res);

      this.loginservice.isUserlogged.subscribe(
        {
          next:(res)=>{
            this.isUsrLoggd=res;
          }
        }
      )
  }


  searchproduct(search: any, category: any) {
    search as ElementRef;
    if (search.value != "")
      this.router.navigate(['/products/search/', search.value, category]);


    search.value = "";
  }

  gocategory(id: number) {
    this.router.navigate(['/products/searchcategory', id]);

  }


}
