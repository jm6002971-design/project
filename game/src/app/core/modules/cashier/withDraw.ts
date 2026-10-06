import { Common } from '../common';

export interface WithdrawSystems extends Common {
    cashOutInfo: CashOutInfo;
}

export interface CashOutInfo {
    errorMsg:string;
    params:   FormField[];
    gateWays:     GateWay[];
    paymentMeans: PaymentMean[];
}

export interface FormField {
    name:     string;
    required: boolean;
    title:    string;
}

export interface GateWay {
    additional:  any[];
    description: string;
    id:          string;
    name:        string;
    selected:    boolean;
    type:        string;
}

export interface PaymentMean {
    meanId:     string;
    meanNumber: string;
    selected:   boolean;
}
