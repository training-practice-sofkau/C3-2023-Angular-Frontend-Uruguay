import {customerInterface} from './customer-interface'
import {AccountTypeinterface} from './Account-type-interface'

export interface  NewTransferInterface

  {
    income: string,
    id?: string
    outcome: string,
    transferAmount: number,
    transferReason: string;
    dateTime: Date | number;
    state?: true  | false;
    deletedAt?: Date | number}




