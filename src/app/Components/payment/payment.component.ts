import { Component, OnInit } from '@angular/core';
// import { render } from 'creditcardpayments/creditCardPayments';

declare var paypal: {
  Buttons: (arg0:{ 
      createOrder: (data: any, actions: any) => any; 
      onApprove: (data: any, actions: any) => Promise<void>;
      onError: (err: any) => void; }) => { (): any; new(): any;
      render: { (arg0: any): void; new(): any; }; };
};

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { 
  //   render
  // (
  //   {
  //     id:"#myPaypal",
  //     currency:"USD",
  //     value:"100.00",
  //     onApprove:(details)=>
  //     {
  //       console.log("sdsds");
  //       alert("Transaction successfuly");
  //     }
  //   }
  // );
  }

  ngOnInit(): void {
    
  }

}
