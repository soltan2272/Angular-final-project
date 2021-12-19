import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { RouterModule, Routes } from '@angular/router';
import { AddofferComponent } from './addoffer/addoffer.component';
import { UpdateofferComponent } from './updateoffer/updateoffer.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const routs:Routes=[
 
  {path:"offers", component:OfferComponent},
  {path:"addoffer" , component:AddofferComponent},
  {path:"updateoffer/:offid" , component:UpdateofferComponent}
]


@NgModule({
  declarations: [
    OfferComponent,
    UpdateofferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    NgxPaginationModule

  ]
})
export class OfferModule { }
