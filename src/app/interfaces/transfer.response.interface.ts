import { AccountModel } from './account.interface';

export interface TransferResponseModel {
  id: string;
  outcome: AccountModel;
  income: AccountModel;
  balance: number;
  reason: string;
  dateTime: string;
}
