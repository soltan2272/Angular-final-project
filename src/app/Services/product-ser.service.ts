import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';
import { ResultViewModel } from '../ViewModels/result-view-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InsertProduct } from '../ViewModels/insert-product';

@Injectable({
  providedIn: 'root'
})
export class ProductSerService {
  pro!:Observable<IProduct[]>
  constructor(private httpProduct:HttpClient) { }


  getAllProducts() :Observable<ResultViewModel>
  {
    return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}Product/userProducts`);
  }

  getProductByID(ID:number) :Observable<ResultViewModel>
  {
    return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}Product/`+ID);
  }

  getProductBySuppID(SuppID:number) :Observable<ResultViewModel>
  {
   return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}product/GetProductBySupplierID/`+SuppID);
  }

  addProduct(prod:InsertProduct) :Observable<InsertProduct>
  {
    // const httpOptions={
    //   headers : new HttpHeaders({
    //     'content-type':'application/JSON'
    //   })
    // }
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    //return this.httpProduct.post<any>(`${environment.ApiUrl}Product/addProduct`,JSON.stringify(prod),httpOptions);
    return this.httpProduct.post<InsertProduct>(`${environment.ApiUrl}Product/addProduct`,prod,httpOptions);
  }

  editProduct(prod:IProduct) :Observable<any>
  {
    const httpOptions={
      headers : new HttpHeaders({
        'content-type':'application/JSON'
      })
    }
    return this.httpProduct.put(`${environment.ApiUrl}Product/editProduct`,JSON.stringify(prod),httpOptions);
  }

  deleteProduct(ID:number):Observable<number>
  {
    // debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.httpProduct.delete<number>(`${environment.ApiUrl}Product/Delete/`+ID,httpOptions);
   
  }


}

