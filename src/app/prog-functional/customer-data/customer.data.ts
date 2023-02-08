import { CustomerModel } from "src/app/interfaces/Customer.interface";


export const baseCustomers: Array<CustomerModel> = [
  {
    id: "111111111aaaa",
    documentType: {
      id: "a1s5s5e",
      name: "Cedula",
      state: true
    },
    document: "123456-3",
    fullName: "Nombre 1",
    email: "nombre1@email.com",
    phone: 10,
    password: "52sa",
    state: true,
  },
  {
    id: "22222222bbbb",
    documentType: {
      id: "a6a6s6e6e",
      name: "Pasaporte",
      state: true
    },
    document: "3303054-3",
    fullName: "Nombre 2",
    email: "email2@email.com",
    phone: 100,
    password: "52saad2a",
    state: true,
  },
  {
    id: "333333333cccc",
    documentType: {
      id: "asd45442",
      name: "Pasaporte",
      state: true
    },
    document: "123232-3",
    fullName: "Nombre 3",
    email: "email3@email.com",
    phone: 100,
    password: "asdad",
    state: true,
  },
  {
    id: "444444444dddd",
    documentType: {
      id: "asw22",
      name: "Cedula",
      state: true
    },
    document: "2323232-3",
    fullName: "Nombre 4",
    email: "email4@email.com",
    phone: 100,
    password: "aaaa222",
    state: true,
  },
]


