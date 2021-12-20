import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ProductSerService } from 'src/app/Services/productSer/product-ser.service'
import { UploadImgService } from 'src/app/Services/uploadImgInCloudinary/upload-img.service';
import { ICategory } from 'src/app/ViewModels/Category/i-category';
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
  categoryID!:number;
  cateories:ICategory[]=[];
  files: File[] = [];
  constructor(private productSer : ProductSerService
            , private fb:FormBuilder
            , private router:Router
            , private uploadService : UploadImgService,
            private categoryserv:CategoryService) {
    
    this.prd={
      id:0,
      name:"",
      price:1,
      quantity:1,
      description:"",
      rate:1,
      currentCategoryID:1,
      currentSupplierID:1, 
      imgspathes:[""]
  }
   }

  ngOnInit(): void {
    this.categoryserv.getcateory().subscribe(res=>{
      this.cateories=res.data;
    })
    let userid=localStorage.getItem("userID");
    this.prd.currentSupplierID=1001; 
  }

  onSelect(event:any) {   
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  addProduct()
  {
    
    if(!this.files)
    {
      alert("Select Image")
    }
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
              this.prd.imgspathes[i]=res.secure_url;
              
              if(i==this.files.length-1){
                this.productSer.addProduct(this.prd).subscribe(res2=>
                  this.router.navigateByUrl("/blog")

                )  
              }
            }
          
          })
        
        }
    
          
      }
  }
  
}
