import { CustomerModel } from "./Customer.interface";

export interface AccountModel {
  id: string;
  customer: CustomerModel;
  accountTypeId: AccountTypeModel;
  balance: number;
  state: boolean;
}

export interface AccountTypeModel {
  id: string;
  name: string;
  state: boolean;
}
