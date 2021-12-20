import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/Services/User/login.service';
import { RegisterService } from 'src/app/Services/User/register.service';
import { AuthModel } from 'src/app/ViewModels/User/auth-model';
import { RegisterModel } from 'src/app/ViewModels/User/register-model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  registerform: FormGroup = {} as FormGroup;
  registerModel:RegisterModel={} as RegisterModel;
  authModel:AuthModel={} as AuthModel;
  Message:string="";
  userInfo:RegisterModel={} as RegisterModel;

  public isLogged:boolean=false;
  constructor(private fb: FormBuilder,private registerService:RegisterService,private traslate:TranslateService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.getUserInfo(Number (localStorage.getItem("userID")))
    .subscribe({
      next:(res)=>{
        console.log(res.data);      
        this.userInfo=res.data;
        this.registerform = this.fb.group({
          FullName: [this.userInfo.full_Name, [Validators.required]],
          Email: [this.userInfo.email, [Validators.required, Validators.email]],
          SSN:[this.userInfo.ssn,[Validators.required,Validators.pattern(".{9}")]],
          Address:[this.userInfo.adrress,Validators.required],
          Phone:[this.userInfo.phone,[Validators.required,Validators.pattern(".{9}")]],
          date_birth:[this.userInfo.date_Of_Birth,Validators.required],
          isSeller:[]
      });
      }
    });
  
  this.traslate.setDefaultLang("en");
  
}


  onSubmit()
  {
    //alert("jjj");
    console.log(this.registerform.controls["FullName"].value);
    //console.log(this.registerform.controls["Password"].value);
    console.log(this.registerform.controls["isSeller"].value);

    let usrID=Number (localStorage.getItem("userID"));
    this.registerModel.id=usrID;
    this.registerModel.full_Name=this.registerform.controls["FullName"].value;
    this.registerModel.email=this.registerform.controls["Email"].value;
    //this.registerModel.password=this.registerform.controls["Password"].value;
    this.registerModel.ssn=this.registerform.controls["SSN"].value;
    this.registerModel.adrress=this.registerform.controls["Address"].value;
    this.registerModel.phone=this.registerform.controls["Phone"].value;
    this.registerModel.date_Of_Birth=this.registerform.controls["date_birth"].value;
   this.loginService.editProfile(this.registerModel).subscribe({
     next:(res)=>
     {
       location.replace("/user/profile")
     },
     error:(err)=>
     {
      location.replace("/user/profile")
     }
   })
  }
}
