import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/home/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductModule } from './Components/productDetiales/product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatePipePipe } from './filtersPipe/rate-pipe.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ProductSerComponent } from './Components/product-ser/product-ser.component';
import { ShoppingCartComponent } from './Components/shoppingCart/shopping-cart/shopping-cart.component';
import { CartModule } from './Components/shoppingCart/cart/cart.module';
import { UserModuleModule } from './Components/User/model/user-module/user-module.module';
import { PaymentComponent } from './Components/payment/payment.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { PaypalComponent } from './Components/paypal/paypal.component';
import {NgxDropzoneModule } from 'ngx-dropzone';
import { CustomerprofileComponent } from './Components/User/customerprofile/customerprofile.component';
<<<<<<< HEAD
import { AdminComponent } from './Components/admin/admin.component';
=======
import { AddofferComponent } from './Components/Offer/addoffer/addoffer/addoffer.component';
import { UpdateofferComponent } from './Components/Offer/updateoffer/updateoffer/updateoffer.component';
import { OfferModule } from './Components/Offer/offer.module';
import { DeliverystatusComponent } from './Components/User/deliverystatus/deliverystatus.component';

>>>>>>> ee60cbfeb281a0e7fb5158394e0b9833e453da2f

export function createTranslateLoader(http:HttpClient)
{
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    RatePipePipe,
    ProductSerComponent,
    AddProductComponent,
    EditProductComponent,
    ShoppingCartComponent,
    PaymentComponent,
    PaypalComponent,
    CustomerprofileComponent,
<<<<<<< HEAD
    AdminComponent
=======
    AddofferComponent,
    UpdateofferComponent,
   
    DeliverystatusComponent
>>>>>>> ee60cbfeb281a0e7fb5158394e0b9833e453da2f
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule ,
    CartModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    LazyLoadImageModule,
    UserModuleModule,
    OfferModule,
    NgxDropzoneModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory:(createTranslateLoader),
          deps: [HttpClient]
      },
      defaultLanguage:'ar'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
