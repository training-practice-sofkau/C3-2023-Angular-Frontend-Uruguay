import { CustomerModel } from "./customer.interface";

export interface JwtTokenModel {
  customer: CustomerModel;
  iat: number;
  exp: number;
}
