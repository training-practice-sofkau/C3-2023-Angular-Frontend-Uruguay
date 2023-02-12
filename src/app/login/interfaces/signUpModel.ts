import { DocumentTypeModel } from '../../program-Funcional/interfaces/customerModel';

export interface SignUpModel{

    documentType: DocumentTypeModel;
    document: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
}