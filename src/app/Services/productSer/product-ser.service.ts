import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { InsertProduct } from 'src/app/ViewModels/insert-product';

@Injectable({
  providedIn: 'root'
})
export class ProductSerService {
  pro!:Observable<IProduct[]>
  constructor(private httpProduct:HttpClient) { }


  getAllProducts() :Observable<ResultViewModel>
  {
    return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}Product/AdminProducts`);
  }
  getProduct(id:number) :Observable<ResultViewModel>
  {
    return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}Product/AdminProduct/${id}`);
  }
  getProductByID(ID:number) :Observable<ResultViewModel>
  {
    return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}Product/AdminProduct/`+ID);
  }

  getProductBySuppID(SuppID:number) :Observable<ResultViewModel>
  {
   return this.httpProduct.get<ResultViewModel>(`${environment.ApiUrl}product/GetProductBySupplierID/`+SuppID);
  }

  addProduct(prod:InsertProduct) :Observable<ResultViewModel>
  {
   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    return this.httpProduct.post<ResultViewModel>(`${environment.ApiUrl}Product/addProduct`,prod,httpOptions);
  }

  updateProduct(prod:InsertProduct) :Observable<ResultViewModel>
  {
   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    return this.httpProduct.put<ResultViewModel>(`${environment.ApiUrl}Product/UpdateProduct`,prod,httpOptions);
  }

  editProduct(id:number, prod:InsertProduct)  :Observable<ResultViewModel>
  {
    const httpOptions={
      headers : new HttpHeaders({
        'content-type':'application/JSON'
      })
    }
    return this.httpProduct.put<ResultViewModel>(`${environment.ApiUrl}Product/editProduct/${id}`,JSON.stringify(prod),httpOptions);
  }

  deleteProduct(ID:number):Observable<ResultViewModel>
  {
    //debugger
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
   console.log("before");
    this.httpProduct.delete<ResultViewModel>(`${environment.ApiUrl}Product/Delete/${ID}`).subscribe({
      next : (res) => console.log(res)
    })
    return this.httpProduct.delete<ResultViewModel>(`${environment.ApiUrl}Product/Delete/${ID}`);
   
  }


}

