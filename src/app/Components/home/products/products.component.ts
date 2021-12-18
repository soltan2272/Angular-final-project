import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  indexProducts:IndexProduct[]=[];
  constructor(private productServes:ProductService , private rout : Router){}

  ngOnInit(): void {
    this.productServes.getAllProducts().subscribe(
      (response) => {
        this.indexProducts = response.data;
      },
      (error) => { console.log(error) }
    )
  }

  getproductditails(id : number)
  {
    this.rout.navigate(['/products/productdetails',id]);

  }


}
