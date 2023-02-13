import {customerInterface} from './customer-interface'
import {AccountTypeinterface} from './Account-type-interface'

export interface  AccountTransfer

  {
    customer: customerInterface;
    accountType: AccountTypeinterface;
    acc_Balance: number;
    deletedAt?: number | Date
    id: string;
    state: boolean;
  }


