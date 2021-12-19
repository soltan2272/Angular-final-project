import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OfferComponent } from './offer/offer/offer.component';
import { AddofferComponent } from './addoffer/addoffer/addoffer.component';
// import { UpdateofferComponent } from './updateoffer/updateoffer/updateoffer.component';


const routs:Routes=[
 
  {path:"offers", component:OfferComponent},
  {path:"addoffer" , component:AddofferComponent},
  // {path:"updateoffer/:offid" , component:UpdateofferComponent}
]


@NgModule({
  declarations: [
    OfferComponent,
    // UpdateofferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    NgxPaginationModule

  ]
})
export class OfferModule { }
