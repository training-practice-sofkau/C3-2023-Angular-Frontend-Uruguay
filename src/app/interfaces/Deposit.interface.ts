import { AccountInterface } from './Account.interface';

export interface DepositInterface {
  id : string;
  account: AccountInterface;
  amount: number;
  deletedAt?: number | Date;
  dateTime: number | Date;
  state: boolean;
}
