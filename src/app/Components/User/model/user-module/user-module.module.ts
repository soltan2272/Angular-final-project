import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../register/register.component';
import { TranslateModule } from '@ngx-translate/core';
import { DeliverystatusComponent } from '../../deliverystatus/deliverystatus.component';
import { UserGuardGuard } from 'src/app/Guards/user-guard.guard';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { CustomerprofileComponent } from '../../customerprofile/page/customerprofile.component';


const routs:Routes=[
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  //canActivate:[UserGuardGuard]},
  {path:"delivery",component:DeliverystatusComponent},
  {path:"profile" , component:CustomerprofileComponent},
  {path:"**", component:HomeComponent} 
]

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class UserModuleModule { }
