import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontact } from 'src/app/ViewModels/icontact/icontact';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }

  AddContactUS(contact:Icontact):Observable<ResultViewModel>
  {
   const httpOptions={
     headers : new HttpHeaders({
       'content-type':'application/JSON'
     })}
     console.log(contact)
    return this.http.post<ResultViewModel>(`${environment.ApiUrl}user/addContactUs`,JSON.stringify(contact),httpOptions)
  }
}
