import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifeedback } from 'src/app/ViewModels/ifeedback/ifeedback';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  GetProdFeedback(id:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/GetProdFeedback/`+id)
  }

  AddFeedback(feedback:Ifeedback):Observable<any>
  {
   const httpOptions={
     headers : new HttpHeaders({
       'content-type':'application/JSON'
     })}
    return this.http.post<Ifeedback>(`${environment.ApiUrl}product/addfeedback`,JSON.stringify(feedback),httpOptions)
  }
}
