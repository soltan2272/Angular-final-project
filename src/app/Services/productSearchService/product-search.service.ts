import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http:HttpClient) { }

  filterSearchName(name:string):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}search/Name/`+name)
   }

   filterCategoryName(Category:number,name:string):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}search/Category/${Category}/${name}`)
   }
   filterCategorysearchName(Category:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}search/Category/${Category}`)
   }
}
