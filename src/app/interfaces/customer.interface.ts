

export interface CustomerModel {
   
  id: string;
  documentTypeId: DocumentTypeModel;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  state: boolean;
  daletedAt?: Date | number;
    token: string;
  }
  
  export interface DocumentTypeModel {
    id: string;
    name: string;
    state: boolean;
  }