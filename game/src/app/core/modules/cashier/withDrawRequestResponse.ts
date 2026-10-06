import { Common } from '../common';

export interface withDrawRequestResponse extends Common {
    result: Result;
}
export interface Result {
    success: boolean;
}