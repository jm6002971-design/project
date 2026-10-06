import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-depositpage',
  imports: [CommonModule, RouterModule],
  templateUrl: './depositpage.html',
  styleUrl: './depositpage.css'
})
export class Depositpage {
  
  merchantId:any;
  orderId:any;
  paymentMethods:any[]=[];

  constructor(
    private route:ActivatedRoute, 
  ){}

  ngOnInit(){
    const response = [
      "APAY_BDT",
      "OKPAY",
      "FIRSTPE",
      "SMILEPAYZ",
      "PAY2LOCAL",
      "SPEEDPAY",
      "T365(1445)",
      "RUPAY360",
      "AGPAY",
      "T365(2565)",
      "GLOBALPAY",
      "PayExpoPayout",
      "PAY2PLAY",
      "CONNECT_CYRO",
      "PAY-INDIA",
      "T365(2198)",
      "APAY_PKR",
      "P2P_EXPERT",
      "APAY",
      "T365_BDT",
      "INDIAPE",
      "T365"
    ];
 





  
    this.paymentMethods = response;
  
    this.route.queryParams.subscribe(params=>{
      this.merchantId = params['merchantId'];
      this.orderId = params['orderId'];

      if(this.merchantId && this.orderId){
       console.log(this.orderId, this.merchantId)
      }
    })

  }

selectMethod(method: string){
  console.log("Selected Payment:", method);
}
}
