import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../register/register.component';
import { TranslateModule } from '@ngx-translate/core';


const routs:Routes=[
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
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
