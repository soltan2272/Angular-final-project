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
import { EditProfileComponent } from '../../edit-profile/edit-profile.component';
import { LogoutComponent } from '../../logout/logout.component';
import { ProfileGuard } from 'src/app/Guards/profile.guard';


const routs:Routes=[
  {path:"login", component:LoginComponent,canActivate:[UserGuardGuard]},
  {path:"register", component:RegisterComponent,canActivate:[UserGuardGuard]},
  {path:"delivery",component:DeliverystatusComponent,canActivate:[ProfileGuard]},
  {path:"profile" , component:CustomerprofileComponent,canActivate:[ProfileGuard]},
  {path:"editprofile" , component:EditProfileComponent,canActivate:[ProfileGuard]},
  {path:"logout" , component:LogoutComponent,canActivate:[ProfileGuard]},
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
