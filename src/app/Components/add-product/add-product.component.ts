import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductSerService } from 'src/app/Services/productSer/product-ser.service'
import { UploadImgService } from 'src/app/Services/uploadImgInCloudinary/upload-img.service';
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
  files: File[] = [];
  constructor(private productSer : ProductSerService
            , private fb:FormBuilder
            , private router:Router
            , private uploadService : UploadImgService) {
    
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
    debugger
    this.productSer.addProduct(this.prd).subscribe({
      next : res=> console.log(res)
    })
    if(!this.files[0])
    {
      alert("Select Image")
    }
    const fileData = this.files[0];
    const data = new FormData();
    data.append('file',fileData);
    data.append('upload_preset','Angular_cloudinary');
    data.append('cloud_name','dppeduocd');

    this.uploadService.uploadImage(data).subscribe(
      (res)=>{
        if (res)
          console.log(res.secure_url);
      }
    )

    this.router.navigateByUrl("/home");
  }
  
}
