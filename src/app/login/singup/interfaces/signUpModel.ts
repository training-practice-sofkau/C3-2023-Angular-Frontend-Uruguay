import { DocumentTypeModel } from '../../../program-Funcional/interfaces/customerModel';

export interface SignUpModel{

    documentType: DocumentTypeModel;//DocumentTypeModel , es un tipo de dato que nosotros creamos
    document: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
}