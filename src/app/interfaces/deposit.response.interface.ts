import { AccountModel } from './account.interface';

export interface DepositResponseModel {
  id: string;
  account: AccountModel;
  amount: number;
  dateTime: string;
}
