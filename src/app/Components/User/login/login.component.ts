import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/Services/User/login.service';
import { AuthModel } from 'src/app/ViewModels/User/auth-model';
import { LoginModel } from 'src/app/ViewModels/User/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup = {} as FormGroup;
  loginModel:LoginModel={}as LoginModel;
  authModel:AuthModel={} as AuthModel;
  Message:string="";
  public isLogged:boolean=false;
  constructor(private fb: FormBuilder,private loginService:LoginService,private traslate:TranslateService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
     
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required,Validators.pattern(".{6,}")]]
    
  });
  this.traslate.setDefaultLang("en");
  
}

changeLanguage(e:any)
{
  console.log(e.target.value);
  this.traslate.setDefaultLang(e.target.value);
}
onLangChange()
{
  this.traslate.onLangChange.subscribe((res)=>console.log(res))
}
  onSubmit()
  {
    //alert("jjj");
    console.log(this.loginform.controls["Email"].value);
    console.log(this.loginform.controls["Password"].value);

   
    this. loginModel.Email=this.loginform.controls["Email"].value;
    this. loginModel.Password=this.loginform.controls["Password"].value;
   
    this.loginService.login(this. loginModel).subscribe(   
      {
        next:(res) =>{{
      this.authModel=res
      console.log(this.authModel); 
      console.log(this.authModel.message)
       this.Message=res.message
       this.isLogged=res.isAuthenticated
       console.log(this.Message)
        this.loginService.isUserlogged.subscribe({
          next:(res)=>{
            console.log(res)
          }
        })
        if(this.authModel.isAuthenticated==true)
        {
         this.Message="Login Successfuly";
         console.log(localStorage.getItem("isuserlogged"));
         console.log(localStorage.getItem("usrRoles"));
        }
        }
     }
    }
    );
  
  }
}