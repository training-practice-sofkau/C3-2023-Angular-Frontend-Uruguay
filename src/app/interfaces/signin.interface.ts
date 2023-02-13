export interface SignInModel {
  documentTypeName: string;
  accountTypeName: string;
  balance: number;
  document: string;
  fullName: string;
  email: string;
  phone: number;
  password: string;
  avatarUrl?: string;
}
