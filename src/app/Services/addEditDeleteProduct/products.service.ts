import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertProduct } from 'src/app/ViewModels/insert-product';
import { ProductImage } from 'src/app/ViewModels/productImage/product-image';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addProduct(product:InsertProduct) :Observable<ResultViewModel>
  {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<ResultViewModel>(`${environment.ApiUrl}Product/addangularProduct`,product,httpOptions);
  }
  addImages(images:ProductImage[]) :Observable<ResultViewModel>
  {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<ResultViewModel>(`${environment.ApiUrl}Product/addangularimages`,images,httpOptions);
  }

}
