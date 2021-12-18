import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  public watchListItem:any=[];
  public productList= new BehaviorSubject<any>([]);
  public numberProducts=new BehaviorSubject<number>(0);
  public count:number=0;
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.watchListItem.push(...product);
    this.productList.next(product);
  }

  addtoWatchList(product:any){
    let pro=this.watchListItem.find((p:any)=>p==product);
    if(pro==null){
    this.watchListItem.push(product);
    this.productList.next(this.watchListItem);
    this.count++;
    this.numberProducts.next(this.count);
    }
  }

  removeWatchListItem(product:any){
    this.watchListItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.watchListItem.splice(index,1);
        this.count--;
        this.numberProducts.next(this.count);
      }
    })
  }

  rewoveAllItems(){
    this.watchListItem=[];
    this.productList.next(this.watchListItem);
  }
  getcount(){
    return this.numberProducts.asObservable()
  }

}
