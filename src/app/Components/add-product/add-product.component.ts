import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductSerService } from 'src/app/Services/product-ser.service';
import { InsertProduct } from 'src/app/ViewModels/insert-product';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  prd:InsertProduct; //= {} as IProduct; 
  addFrm !: FormGroup;
  constructor(private productSer : ProductSerService
            , private fb:FormBuilder
            , private router:Router) {
    
    this.prd={
      id:0,
      name:"",
      price:0,
      quantity:0,
      description:"",
      rate:1,
      currentCategoryID:1,
      currentSupplierID:1,
      imgspathes:[""]
  }
   }

  ngOnInit(): void {
    
  }
  addProduct()
  {
    debugger
    this.productSer.addProduct(this.prd).subscribe({
      next : res=> console.log(res)
    })
    this.router.navigateByUrl("/home");
  }
  
}
