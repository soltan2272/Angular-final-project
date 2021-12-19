import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { HomeComponent } from './Components/home/home.component';

import { PaymentComponent } from './Components/payment/payment.component';
import { PaypalComponent } from './Components/paypal/paypal.component';

import { ProductSerComponent } from './Components/product-ser/product-ser.component';

import { ProductModule } from './Components/productDetiales/product/product.module';
import { ShopComponent } from './Components/productDetiales/product/shop/shop.component';

const routes: Routes = [
  {path:"" , redirectTo : '/home', pathMatch : 'full'},
  {path:"home" , component:HomeComponent},
  {path:"payment" , component:PaypalComponent},
  {path:"blog" , component:ProductSerComponent},
  {path:"addProduct" , component:AddProductComponent},
<<<<<<< HEAD
  {path:"editProduct" , component:EditProductComponent},
  {path:"admin" , component:AdminComponent},

=======
  {path:"editProduct/:PID" , component:EditProductComponent},
>>>>>>> ee60cbfeb281a0e7fb5158394e0b9833e453da2f
  {path:"products" , 
  loadChildren : ()=> import ('src/app/Components/productDetiales/product/product.module').then(m=> m.ProductModule)},
  {path:"user" , 
  loadChildren : ()=> import ('src/app/Components/User/model/user-module/user-module.module').then(m=>m.UserModuleModule )},
  {path:"shoppingcart" , 
  loadChildren : ()=> import ('src/app/Components/shoppingCart/cart/cart.module').then(m=> m.CartModule)},
  {path:"offer" , 
  loadChildren : ()=> import ('src/app/Components/Offer/offer.module').then(m=> m.OfferModule)},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
