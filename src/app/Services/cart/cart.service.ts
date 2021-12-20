import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IndexProduct } from 'src/app/ViewModels/index-product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartListItem:any=[];
   productList= new BehaviorSubject<IndexProduct[]>([]);
   numberProducts=new BehaviorSubject<number>(0);
   count:number=0;
   totalPrice=new BehaviorSubject<number>(0);
   totalPriceperPayment=new BehaviorSubject<number>(0);
   prices:number=0;
   
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartListItem.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:IndexProduct){
    let pro=this.cartListItem.find((p:any)=>p==product);
    if(pro==null){
    this.cartListItem.push(product);
    this.productList.next(this.cartListItem);
    this.count++;
    this.prices+=product.price;
    this.numberProducts.next(this.count);
   this. getTotalPrice();
    }
  }

  removeCartItem(product:any){
    this.cartListItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartListItem.splice(index,1);
        this.productList.next(this.cartListItem);
        this.count--;
        this.numberProducts.next(this.count);
        this.prices-=product.price;
        this. getTotalPrice();

      }
    })
  }

  rewoveAllItems(){
    this.cartListItem=[];
    this.productList.next(this.cartListItem);
    this.numberProducts.next(0);
    this.totalPrice.next(0);
    this.totalPriceperPayment.next(0);
  }
  getcount(){
    return this.numberProducts.asObservable()
  }

  
  setTotalPrice(price:number){
    this.totalPrice.next(price);
  }
  getTotalPrice(){
    this.totalPrice.next(this.prices);
    localStorage.setItem("allpayment",this.totalPrice.value.toString());
    return this.totalPrice.asObservable();
  }


  setTotalPricepayment(price:number){
    this.totalPriceperPayment.next(price);
  }
  getTotalPricepayment(){

    return this.totalPriceperPayment.asObservable();
  }
}
