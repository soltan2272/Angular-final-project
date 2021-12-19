import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSerService } from 'src/app/Services/productSer/product-ser.service'
import { InsertProduct } from 'src/app/ViewModels/insert-product';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
 // prd:IProduct;
  pID:number=1;
  product!:InsertProduct;
  constructor(private productSer : ProductSerService
            , private router:Router , private acivatedRouter : ActivatedRoute) {

              this.product={
                id:0,
                name:"",
                price:0,
                quantity:0, 
                description:"",
                rate:1,
                currentCategoryID:1,
                currentSupplierID:1,
                imgspathes:["","",""]
             }

}  
ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  editProduct()
  {
    debugger
    this.acivatedRouter.paramMap.subscribe((param)=>
  {

    this.pID=Number(param.get("PID"));
    console.log(this.pID);

  //   this.productSer.getProductByID(this.pID).subscribe(
  //     (res)=> this.product=res.data);
  //     this.product.name = this.prd.name;
  //     this.product.price = this.prd.price;
  //     this.product.quantity = this.prd.quantity;
  //     this.product.rate = this.prd.rate;
  //     this.product.description = this.prd.description;
  //     this.product.currentCategoryID = this.prd.currentCategoryID;
  //     this.product.currentSupplierID = this.prd.currentSupplierID;

     
   });

  this.productSer.editProduct(this.pID,this.product).subscribe({
    next : res=> console.log(res)
  })
    this.router.navigateByUrl("/home");
  }

}