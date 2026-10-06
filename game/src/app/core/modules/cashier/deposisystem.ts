import { Common } from '../common';

export interface DepositSystem extends Common{
    success: boolean;
    result: Result;
}

export interface Result {
    externalLink: boolean;
    redirectUrl: string;
}


