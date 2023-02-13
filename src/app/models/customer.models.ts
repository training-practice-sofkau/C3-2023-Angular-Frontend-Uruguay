
export class UserModel {

  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone?: string;
  password: string;

  constructor(

    documentTypeId: string,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string
  ) {
    
    this.documentTypeId = documentTypeId;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
