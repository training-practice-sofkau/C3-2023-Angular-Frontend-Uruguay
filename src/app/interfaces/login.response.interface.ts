import { CustomerModel } from './customer.interface';
export interface LoginResponseModel {
  customer: CustomerModel;
  token: string;
}
