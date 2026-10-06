
    export interface WitdrawSelect {
        status: boolean;
        message: string;
        data: Datum[];
    }
    export interface Datum {
        name: string;
        slug: string;
        code: string;
        longcode: string;
        gateway: string;
        pay_with_bank: boolean;
        active: boolean;
        is_deleted?: boolean;
        country: string;
        currency: string;
        type: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }





