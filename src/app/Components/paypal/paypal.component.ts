import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';

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
  constructor(private cart: CartService) { }
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

          this.cart.rewoveAllItems();
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
