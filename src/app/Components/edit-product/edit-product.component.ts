import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ProductSerService } from 'src/app/Services/productSer/product-ser.service'
import { UploadImgService } from 'src/app/Services/uploadImgInCloudinary/upload-img.service';
import { ICategory } from 'src/app/ViewModels/Category/i-category';
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
  cateories:ICategory[]=[];
  files: File[] = [];

  constructor(private productSer : ProductSerService
            , private router:Router , private acivatedRouter : ActivatedRoute ,
              private categoryserv:CategoryService,
               private uploadService : UploadImgService,
               private ActRouter:ActivatedRoute

              ) {

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
  this.ActRouter.paramMap.subscribe(param => {
    let id= Number(param.get('PID'));
    this.productSer.getProduct(id).subscribe(res => {
      this.product = res.data;
    })
  })
    //throw new Error('Method not implemented.');
    this.categoryserv.getcateory().subscribe(res=>{
      this.cateories=res.data;
    })
    let userid=localStorage.getItem("userID");
    this.product.currentSupplierID=1001; 
  }
  onSelect(event:any) {   
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  editProduct()
  { if(!this.files)
    {
      this.productSer.updateProduct(this.product).subscribe(res2=>
        this.router.navigateByUrl("/blog")

      )    }
    else{
      for (let i=0;i<this.files.length;i++ ){//var key in this.files) {
        const fileData = this.files[i];//this.files[0];
        const data = new FormData();
        data.append('file',fileData);
        data.append('upload_preset','Angular_cloudinary');
        data.append('cloud_name','dppeduocd');
        this.uploadService.uploadImage(data).subscribe(
          res=>{
            if (res){
              console.log(res.secure_url);
              this.product.imgspathes[i]=res.secure_url;
              
              if(i==this.files.length-1){
                this.productSer.updateProduct(this.product).subscribe(res2=>
                  this.router.navigateByUrl("/blog")

                )  
              }
            }
          
          })
        
        }
    
          
      }
  }

}