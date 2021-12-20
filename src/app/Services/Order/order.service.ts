import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/ViewModels/Iorder/i-order';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}User/allOrders`)
   }

   getOrderByID(id:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}User/getOrder/${id}`)
   }

   addOrder(order:IOrder):Observable<ResultViewModel>
   {
     const httpOptions = {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
     }
     this.http
              .post<ResultViewModel>(`${environment.ApiUrl}User/addorder`,JSON.stringify(order),httpOptions)
              .subscribe({
                next:(res)=>{
                  console.log(res)
                }
              });
   return this.http
              .post<ResultViewModel>(`${environment.ApiUrl}User/addorder`,JSON.stringify(order),httpOptions);
   }
}
