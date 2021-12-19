import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  productid: number = 0;
  product: IndexProduct | undefined;

  Details: boolean = true;
  Feedback: boolean = false;
  Rate!: number;
  proid!: number;
  isRated1 = false;
  isRated2 = false;
  isRated3 = false;
  isRated4 = false;
  isRated5 = false;

  constructor(private ActRouter: ActivatedRoute,
    private router: Router, private ProService: ProductService,
    private cart: CartService) { }

  ngOnInit(): void {
    this.ActRouter.paramMap.subscribe(param => {
      this.productid = Number(param.get('pid'));
      this.ProService.ProductDetails(this.productid).subscribe(res => {
        this.product = res.data;
        this.proid = res.data.id;
      })
    })
  }


  addcart(p: any) {
    this.cart.addtoCart(p);
  }

  toggleDetailsFeedback() {
    this.Details = !this.Details;
    this.Feedback = !this.Feedback;
    
  }

  ChangeRating(num: number) {
    switch (num) {
      case 1:
        if (this.isRated2 == false
          && this.isRated3 == false
          && this.isRated4 == false
          && this.isRated5 == false) {
          this.isRated1 = !this.isRated1;
        }
        if (this.isRated2 == true
          && this.isRated3 == true
          && this.isRated4 == true
          && this.isRated5 == true) {
          this.isRated2 = false;
          this.isRated3 = false;
          this.isRated4 = false;
          this.isRated5 = false;

        }
        this.Rate=num;
        break;
      case 2:
        if (this.isRated3 == false
          && this.isRated4 == false
          && this.isRated5 == false) {
          this.isRated1 = true
          this.isRated2 = !this.isRated2;

        }
        if (this.isRated3 == true
          && this.isRated4 == true
          && this.isRated5 == true) {
          this.isRated3 = false;
          this.isRated4 = false;
          this.isRated5 = false;
        }
        this.Rate=num;
        break;
      case 3:
        if (
          this.isRated4 == false
          && this.isRated5 == false) {
          this.isRated1 = true;
          this.isRated2 = true;
          this.isRated3 = !this.isRated3;
        }
        if (this.isRated4 == true
          && this.isRated5 == true) {
          this.isRated4 = false;
          this.isRated5 = false;
        }

        this.Rate=num;
        break;
      case 4:
        if (
          this.isRated5 == false) {
          this.isRated1 = true;
          this.isRated2 = true;
          this.isRated3 = true;
          this.isRated4 = !this.isRated4;
        }
        if (this.isRated5 != false) {
          this.isRated5 = false;
        }
        this.Rate=num;
        break;
      case 5:
        this.isRated1 = true;
        this.isRated2 = true;
        this.isRated3 = true;
        this.isRated4 = true;
        this.isRated5 = !this.isRated5;
        this.Rate=num;

        break;
    }
  }

  // this.ProService.setRate(this.proid,this.Rate).subscribe();

}
