import { CustomerModel } from 'src/app/interfaces/customer.interface';

export interface AccountModel {
  id: string;
  customer: CustomerModel;
  accountType: AccountTypeModel;
  balance: number;
  state: boolean;
}

export interface AccountTypeModel {
  id: string;
  name: string;
  state: boolean;
}
