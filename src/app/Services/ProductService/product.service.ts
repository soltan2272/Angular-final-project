import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ResultViewModel> {
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/AdminProducts`)
  }

  topRateProducts(): Observable<ResultViewModel> {
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/TopRate`)
  }
  newProducts(): Observable<ResultViewModel> {
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/NewProducts`)
  }
  cheapProducts(): Observable<ResultViewModel> {
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}Search/CheepProducts`)
  }

  ProductDetails(id: number): Observable<ResultViewModel> {
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/UserProduct/`+id);
  }

}
