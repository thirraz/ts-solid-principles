import { Product } from "./product"

const createSUT = (name: string, price: number): Product => {
     return new Product(name, price)
}

describe("Product", () => {
     afterEach(() => jest.clearAllMocks())

     it("should have properties name and price", () => {
          const sut = createSUT("T-Shirt", 49.9)
          expect(sut).toHaveProperty("name", "T-Shirt")
          expect(sut.price).toBeCloseTo(49.9)
     })
})
