export interface CustomerOrder {
     getName(): string
     getIDN(): string //Identification Number
}

export interface IndividualCustomerProtocol {
     firstName: string
     lastName: string
     cpf: string
}

export interface EnterpriseCustomerProtocol {
     name: string
     cnpj: string
}
