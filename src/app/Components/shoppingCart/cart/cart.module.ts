import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';

const routs:Routes=[
  {path:"", component:ShoppingCartComponent},
 
  // {path:"search/name/category/:name/:catid", component:ProductSearchComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routs)
  ]
})
export class CartModule { }
