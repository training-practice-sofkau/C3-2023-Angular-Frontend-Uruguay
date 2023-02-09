import{DocumentTypeInterface} from './document-Type-Interface'
export interface customerInterface {
  token: string;

  documentType: DocumentTypeInterface;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  name: string;
  id: string;
  state: boolean;
}
