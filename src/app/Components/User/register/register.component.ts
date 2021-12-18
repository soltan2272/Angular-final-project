import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RegisterService } from 'src/app/Services/User/register.service';
import { AuthModel } from 'src/app/ViewModels/User/auth-model';
import { RegisterModel } from 'src/app/ViewModels/User/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup = {} as FormGroup;
  registerModel:RegisterModel={} as RegisterModel;
  authModel:AuthModel={} as AuthModel;
  Message:string="";
  public isLogged:boolean=false;
  constructor(private fb: FormBuilder,private registerService:RegisterService,private traslate:TranslateService) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      FullName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required,Validators.pattern(".{6,}")]],
      SSN:['',[Validators.required,Validators.pattern(".{9}")]],
      Address:['',Validators.required],
      Phone:['',[Validators.required,Validators.pattern(".{9}")]],
      date_birth:['',Validators.required],
      isSeller:[]
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
    console.log(this.registerform.controls["FullName"].value);
    console.log(this.registerform.controls["Password"].value);
    console.log(this.registerform.controls["isSeller"].value);

    this.registerModel.Full_Name=this.registerform.controls["FullName"].value;
    this.registerModel.Email=this.registerform.controls["Email"].value;
    this.registerModel.Password=this.registerform.controls["Password"].value;
    this.registerModel.SSN=this.registerform.controls["SSN"].value;
    this.registerModel.Adrress=this.registerform.controls["Address"].value;
    this.registerModel.Phone=this.registerform.controls["Phone"].value;
    this.registerModel.Date_Of_Birth=this.registerform.controls["date_birth"].value;
    if(this.registerform.controls["isSeller"].value==true)
    {
      this.registerService.sellerregister( this.registerModel).subscribe(   
        res=>{this.authModel=res
         console.log(this.authModel); 
         console.log(this.authModel.message)
       this.Message=res.message
       this.isLogged=res.isAuthenticated
       console.log(this.Message)});
    }
    else
    {
    this.registerService.userregister( this.registerModel).subscribe(   
     res=>{this.authModel=res
      console.log(this.authModel); 
      console.log(this.authModel.message)
    this.Message=res.message
    this.isLogged=res.isAuthenticated
    console.log(this.Message)}
    );
     }
  }
}
