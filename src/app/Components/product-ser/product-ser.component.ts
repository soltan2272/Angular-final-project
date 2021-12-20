import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSerService } from 'src/app/Services/productSer/product-ser.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';

@Component({
  selector: 'app-product-ser',
  templateUrl: './product-ser.component.html',
  styleUrls: ['./product-ser.component.scss']
})
export class ProductSerComponent implements OnInit , OnChanges {

  Product!:ResultViewModel;
   ps:IProduct[]=  [];
   pp!:IProduct[];
  
  constructor(private ActRouter : ActivatedRoute , private router:Router , private productSer : ProductSerService) { 
  
  }

  ngOnChanges(changes: SimpleChanges): void {
   

  }

  // ngOnInit(): void {
  //   this.productSer.getAllProducts().subscribe({
  //     next : (p) => {this.Product =p ; this.ps = this.Product.data ; console.log(this.ps);
  //       this.pp = Array.from(this.ps); console.log(this.pp);
  //     //this.ps = Array.from(p.data)
  //     },

  //     error: (err) =>{console.log(err);}
  //   });




    ngOnInit(): void {
      this.ActRouter.paramMap.subscribe(param =>{
        this.productSer.getAllProducts().subscribe(res =>
          {
            this.Product = res;
            this.ps =Array.from(this.Product.data);
            console.log(this.ps)
          })
      })
    }
  

  deleteProd(id:number)
  {
    
    this.ActRouter.paramMap.subscribe(param =>{
    this.productSer.deleteProduct(id).subscribe({
      next : (res) =>
       { 
         this.ps = res.data as IProduct[]
       }
    }) 
   })
  }
  update(id:number){
    this.router.navigate(['/editProduct',id]);
  }
}
