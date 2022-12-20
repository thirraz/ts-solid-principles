import { EnterpriseCustomer, IndividualCustomer } from "./customer"

const createIndividualCustomer = (
     firstName: string,
     lastName: string,
     cpf: string,
): IndividualCustomer => {
     return new IndividualCustomer(firstName, lastName, cpf)
}

const createEnterpriseCustomer = (
     name: string,
     cnpj: string,
): EnterpriseCustomer => {
     return new EnterpriseCustomer(name, cnpj)
}

afterEach(() => jest.clearAllMocks())

describe("IndividualCustomer", () => {
     it("shoult have this properties: firstName, lastName and cpf", () => {
          const sut = createIndividualCustomer(
               "Luiz",
               "Otávio",
               "111.111.111-11",
          )
          expect(sut).toHaveProperty("firstName", "Luiz")
          expect(sut).toHaveProperty("lastName", "Otávio")
          expect(sut).toHaveProperty("cpf", "111.111.111-11")
     })

     it("should have methodsgetName() and getIDN() for individual customers", () => {
          const sut = createIndividualCustomer(
               "Luiz",
               "Otávio",
               "111.111.111-11",
          )
          expect(sut.getName()).toBe("Luiz Otávio")
          expect(sut.getIDN()).toBe("111.111.111-11")
     })
})

describe("EnterpriseCustomer", () => {
     it("should have name and cnpj", () => {
          const sut = createEnterpriseCustomer("Udemy", "03.778.130/0001-48")
          expect(sut).toHaveProperty("name", "Udemy")
          expect(sut).toHaveProperty("cnpj", "03.778.130/0001-48")
     })

     it("should have method getName() and getIDN() for enterprise customers", () => {
          const sut = createEnterpriseCustomer("Udemy", "03.778.130/0001-48")
          expect(sut.getName()).toBe("Udemy")
          expect(sut.getIDN()).toBe("03.778.130/0001-48")
     })
})
