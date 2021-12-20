import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthModel } from 'src/app/ViewModels/User/auth-model';
import { LoginModel } from 'src/app/ViewModels/User/login-model';
import { RegisterModel } from 'src/app/ViewModels/User/register-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserlogged:BehaviorSubject<boolean>
  userToken:BehaviorSubject<string>
  userID:BehaviorSubject<number>
  userRoles:BehaviorSubject<string[]>
  constructor(private httpservice:HttpClient) {
  this.isUserlogged=new BehaviorSubject<boolean>(false);
  this.userToken=new BehaviorSubject<string>("");
  this.userID=new BehaviorSubject<number>(0);
  this.userRoles=new BehaviorSubject<string[]>([]);
  this.userToken=new BehaviorSubject<string>("");
  
   }

  login(loginModel:LoginModel):Observable<AuthModel>
  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.httpservice
             .post<AuthModel>(`${environment.ApiUrl}user/login`,JSON.stringify(loginModel),httpOptions)
             .subscribe({
               next:(res)=>{
                this.isUserlogged.next(res.isAuthenticated);
                this.userID.next(res.user_ID);
                this.userToken.next(res.token);
                this.userRoles.next(res.roles); 
                if(res.isAuthenticated==true)    
                {
                  localStorage.setItem("isuserlogged","true");
                  localStorage.setItem("usrToken",res.token),
                  localStorage.setItem("usrName",res.Username),
                  localStorage.setItem("usrEmail",res.Email),
                  localStorage.setItem("userID",res.user_ID.toString()),
                  localStorage.setItem("usrRoles",res.roles.join());
                }
                console.log(this.isUserlogged.value);
               }
             })

   console.log(loginModel);
  return this.httpservice
             .post<AuthModel>(`${environment.ApiUrl}user/login`,JSON.stringify(loginModel),httpOptions);
  }
  getUserInfo(id:number)
  {
    console.log(id);
    this.httpservice
    .get<AuthModel>(`${environment.ApiUrl}user/getuser/${id}`).subscribe(
      {
        next:(res)=>{
          console.log(res);
        }
      }
    )

    return this.httpservice
    .get<AuthModel>(`${environment.ApiUrl}user/getuser/${id}`);
  }

  editProfile(registerModl:RegisterModel)
  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.httpservice
    .post<string>(`${environment.ApiUrl}user/edituser`,JSON.stringify(registerModl),httpOptions)
    .subscribe({
      next:(res)=>{
     console.log(res);
    }})

console.log(registerModl);
return this.httpservice
    .post<string>(`${environment.ApiUrl}user/edituser`,JSON.stringify(registerModl),httpOptions);
  }
}
