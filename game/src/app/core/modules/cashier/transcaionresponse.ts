import { Common } from '../common';
export interface Transcation extends Common{
    withdrawsResponses: WithdrawsResponse[];
}

export interface WithdrawsResponse {
    success: boolean;
    amount: string;
    creationDate: string;
    currency: string;
    displayRefTxnID: string;
    refTxnID: string;
    status: string;
}