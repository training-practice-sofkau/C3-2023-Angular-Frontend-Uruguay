import { CustomerModel } from "./Customer.interface"

export interface AccountModel extends CustomerModel {
    id: string
    customer: CustomerModel
    accountType: AccountTypeModel
    balance: number
    state: boolean
    deletedAt?: Date | number
}

export interface AccountTypeModel {
    id: string
    name: string
    state: boolean
}