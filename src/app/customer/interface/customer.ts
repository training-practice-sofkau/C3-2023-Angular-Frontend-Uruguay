import { DocumentType } from "./documentType";

export interface Customer {
    id: string;
    documentType: DocumentType;//DocumentTypeModel , es un tipo de dato que nosotros creamos
    document: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    avatarUrl?: string;
    state?: boolean;
    daletedAt?: Date | number;
}