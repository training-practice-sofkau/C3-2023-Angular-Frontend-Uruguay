export interface CustomerModel {
  id: string;
  documentType: DocumentTypeModel;
  document: string;
  fullName: string;
  email: string;
  phone: number;
  password: string;
  avatarUrl?: string;
  state: boolean;
  daletedAt?: Date | number;
}

export interface DocumentTypeModel {
  id: string;
  name: string;
  state: boolean;
}

export interface CustomerSignInModel {
  username: string;
  password: string;
}


export interface CustomerSignUpModel {

    documentType: string;
    document: string;
    fullname: string;
    email: string;
    phone: string;
    password: string;
    accountTypeName: string;
}
