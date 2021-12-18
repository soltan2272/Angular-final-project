import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSerService } from 'src/app/Services/product-ser.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prd:IProduct;
  constructor(private productSer : ProductSerService
            , private router:Router) {

              this.prd={
                id:0,
                name:"",
                price:0,
                quantity:0,
                description:"",
                rate:1,
                currentCategoryID:1,
                currentSupplierID:1
             }




}  
ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  editProduct()
  {
    this.productSer.editProduct(this.prd).subscribe({
      next : res=> console.log(res)
    })
    this.router.navigateByUrl("/home");
  }

}