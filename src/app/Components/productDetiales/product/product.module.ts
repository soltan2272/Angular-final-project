import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { RouterModule, Routes } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryProductsComponent } from './category-products/category-products.component';

import { ShopComponent } from './shop/shop.component';

import { NotResultSearchComponent } from './not-result-search/not-result-search.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { NgxPaginationModule } from 'ngx-pagination';



const routs:Routes=[
  {path:"productdetails/:pid", component:ProductdetailsComponent},
  {path:"searchcategory/:catid", component:CategoryProductsComponent},
  {path:"search/:name/:category", component:ProductSearchComponent},
  {path:"search/:name", component:ProductSearchComponent},
  {path:"notresult/:search", component:NotResultSearchComponent},
  {path:"shop" , component:ShopComponent},
  {path:"watchlist", component:WatchListComponent},

  // {path:"search/name/category/:name/:catid", component:ProductSearchComponent}
]

@NgModule({
  declarations: [
    ProductdetailsComponent,
    ProductSearchComponent,
    CategoryProductsComponent,
    ShopComponent,
    NotResultSearchComponent,
    WatchListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    NgxPaginationModule
  ]
})
export class ProductModule {
  pro!:Observable<IProduct[]>
  constructor(private productService:HttpClient) { }


  // getAllProducts() :Observable<IProduct[]>
  // {
  //   return this.productService.get<IProduct[]>(`${environment.ApiUrl}/Product`);
  // }

  // getProductByID(ID:number) :Observable<IProduct>
  // {
  //   return this.productService.get<IProduct>(`${environment.ApiUrl}/Product/`+ID);
  // }

  // getProductBySuppID(SuppID:number) :Observable<IProduct>
  // {
  //  return this.productService.get<IProduct>(`${environment.ApiUrl}/product/GetProductBySupplierID/`+SuppID);
  // }

  // addProduct(prod:IProduct) :Observable<any>
  // {
  //   const httpOptions={
  //     headers : new HttpHeaders({
  //       'content-type':'application/JSON'
  //     })
  //   }
  //   return this.productService.post(`${environment.ApiUrl}/Product/addProduct`,JSON.stringify(prod),httpOptions);
  // }

  // editProduct(prod:IProduct) :Observable<any>
  // {
  //   const httpOptions={
  //     headers : new HttpHeaders({
  //       'content-type':'application/JSON'
  //     })
  //   }
  //   return this.productService.put(`${environment.ApiUrl}/Product/editProduct`,JSON.stringify(prod),httpOptions);
  // }

  // deleteProduct(ID:number):void
  // {
  //   this.productService.delete(`${environment.ApiUrl}/Product/Delete/`+ID)
  // }


 }
