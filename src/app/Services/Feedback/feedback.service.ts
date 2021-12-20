import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeedback } from 'src/app/ViewModels/feedback/i-feedback';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  addFeedback(feedback:IFeedback):Observable<ResultViewModel>{

  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

    return this.http.post<ResultViewModel>(`${environment.ApiUrl}User/addfeedback`,feedback,httpOptions);
  }
}
