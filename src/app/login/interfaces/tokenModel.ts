export interface tokenUser {
    username : string,
    password: string,
    iat:string
} 

export interface tokenCustomer {
    documentTypeId: string,
    accountTypeId: string;
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string,
    iat:string
} 
