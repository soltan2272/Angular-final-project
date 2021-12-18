import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from 'src/app/ViewModels/User/auth-model';
import { RegisterModel } from 'src/app/ViewModels/User/register-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpservice:HttpClient) { }

  userregister(registermodel:RegisterModel):Observable<AuthModel>
  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   console.log(registermodel);
  return this.httpservice
             .post<AuthModel>(`${environment.ApiUrl}user/signup`,JSON.stringify(registermodel),httpOptions);
  }

  sellerregister(registermodel:RegisterModel):Observable<AuthModel>
  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   console.log(registermodel);
  return this.httpservice
             .post<AuthModel>(`${environment.ApiUrl}seller/addseller`,JSON.stringify(registermodel),httpOptions);
  }
}
