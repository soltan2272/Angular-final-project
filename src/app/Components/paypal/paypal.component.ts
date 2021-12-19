import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';
import { OrderService } from 'src/app/Services/Order/order.service';
import { IOrder } from 'src/app/ViewModels/Iorder/i-order';

declare var paypal: {
  Buttons: (arg0: {
    createOrder: (data: any, actions: any) => any;
    onApprove: (data: any, actions: any) => Promise<void>;
    onError: (err: any) => void;
  }) => {
    (): any; new(): any;
    render: { (arg0: any): void; new(): any; };
  };
};

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  totalprice: number = 0;
  invoiceprice:number=0;
  order!:IOrder;
  getOrder!:IOrder;
  constructor(private cart: CartService,private orderser:OrderService) { }
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;


  paidFor = false;

  ngOnInit() {
    this.cart.getTotalPricepayment().subscribe(res => {
      this.totalprice = res;

    })

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.totalprice
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          this.invoiceprice=this.totalprice;
          this.order.totalPrice=this.totalprice;
          let userid=localStorage.getItem("userID");
          this.order.currentUserID= Number(userid); 
          this.orderser.addOrder(order).subscribe();
          
          this.orderser.getOrderByID(this.order.id).subscribe(res=>{
            this.getOrder=res.data;
          })
          this.cart.rewoveAllItems();
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
