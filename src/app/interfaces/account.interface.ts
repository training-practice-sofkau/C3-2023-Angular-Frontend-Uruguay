import { CustomerModel } from "./customer.interface";

export interface AccountInterface {
   
    id: string;
    customer: CustomerModel;
    accountType: AccountTypeInterface;
    balance: number;
    state:boolean;
    deletedAt?: number | Date;
}

export interface AccountTypeInterface {    
    id: string;
    name: string;
    state:boolean;
}
