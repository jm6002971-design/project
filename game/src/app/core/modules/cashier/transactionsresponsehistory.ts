import { Common } from '../common';

export interface TransactionResponse extends Common {
    success: boolean;
    values: Value[];
}

export interface Guid {
    hi: number;
    lo: number;
}

export interface BonusAmount {
    value: number;
}

export interface CashAmount {
    value: number;
}

export interface Bonus {
    value: number;
}

export interface BonusInPlay {
    value: number;
}

export interface Cash {
    value: number;
}

export interface CashInPlay {
    value: number;
}

export interface TicketsAmount {
    value: number;
}

export interface TournamentMoney {
    value: number;
}

export interface Wallet {
    id: number;
    name: string;
}

export interface InitialBalance {
    bonus: Bonus;
    bonusInPlay: BonusInPlay;
    cash: Cash;
    cashInPlay: CashInPlay;
    preferred: boolean;
    ticketsAmount: TicketsAmount;
    tournamentMoney: TournamentMoney;
    wallet: Wallet;
}

export interface Initiator {
    id: number;
    name: string;
}

export interface OperationType {
    id: number;
    name: string;
}

export interface TicketAmount {
    value: number;
}

export interface TournamentMoneyAmount {
    value: number;
}

export interface Value {
    guid: Guid;
    bonusAmount: BonusAmount;
    cashAmount: CashAmount;
    description: string;
    details: any[];
    initialBalance: InitialBalance;
    initiator: Initiator;
    operationDate: string;
    operationType: OperationType;
    receiver: string;
    sender: string;
    ticketAmount: TicketAmount;
    tournamentMoneyAmount: TournamentMoneyAmount;
}





export interface Bonus {
    amount: string;
    bonusType: string;
    currency: string;
    releasedAmount: string;
    startDate: string;
}

export interface Cashout {
    amount: string;
    cancelledAmount: string;
    comments: string;
    createdOn: string;
    paidAmount: string;
    status: string;
    wallet: string;
}

export interface Deposit {
    bonus: string;
    cashAmount: string;
    currency: string;
    paymentSystem: string;
    startDate: string;
    status: string;
}

export interface TransactionResponseForToken extends Common {
    success: boolean;
    bonus: Bonus[];
    cashouts: Cashout[];
    deposits: Deposit[];
}



