import { Common } from '../common';

export interface SlideplayResponse extends Common{
    redirectionUrl:string;
    amount:number;
    externalTransactionId:string;
    paymentSystem:string;
    transactionId:string;
}

