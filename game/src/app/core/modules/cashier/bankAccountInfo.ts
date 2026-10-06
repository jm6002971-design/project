import { Common } from '../common';
export interface BankAccountInfo extends Common {
    TBankAccountInfos: TBankAccountInfo[];
    activeBankCount: number;
    mailId: string;
}
export interface TBankAccountInfo {
    accountStatus: string;
    bankAccountNumber: string;
    bankBranchName: string;
    bankEncodedID: string;
    bankIFSCCOde: string;
    bankName: string;
    bankingType: string;
    default: boolean;
    nameOnBank: string;
    status: string;
}