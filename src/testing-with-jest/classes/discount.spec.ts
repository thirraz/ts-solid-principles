import {
     Discount,
     FiftyPercentDiscount,
     NoDiscount,
     TenPercentDiscount,
} from "./discount"

const createSUT = (className: new () => Discount): Discount => {
     return new className()
}

describe("Discount", () => {
     afterEach(() => jest.clearAllMocks())

     it("should have no discount", () => {
          const sut = createSUT(NoDiscount)
          expect(sut.calculate(10.99)).toBeCloseTo(10.99)
     })

     it("should apply 50% discount on price", () => {
          const sut = createSUT(FiftyPercentDiscount)
          expect(sut.calculate(100)).toBe(50)
     })

     it("should apply 10% discount on price", () => {
          const sut = createSUT(TenPercentDiscount)
          expect(sut.calculate(100)).toBeCloseTo(90)
     })
})
