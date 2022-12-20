import { ShoppingCart } from "./shopping_cart"
import { Discount } from "./discount"
import { CartItem } from "./interfaces/cartItem"

const createDiscountMock = () => {
     class DiscountMock extends Discount {}
     return new DiscountMock()
}

const createSUT = () => {
     const discountMock = createDiscountMock()
     const sut = new ShoppingCart(discountMock)
     return { sut, discountMock }
}

const createCartItem = (name: string, price: number) => {
     class CartItemMock implements CartItem {
          constructor(public name: string, public price: number) {}
     }

     return new CartItemMock(name, price)
}

const createSutWithProducts = () => {
     const { sut, discountMock } = createSUT()
     const cartItem1 = createCartItem("T-Shirt", 40)
     const cartItem2 = createCartItem("Pen", 3)

     sut.addItem(cartItem1)
     sut.addItem(cartItem2)
     return { sut, discountMock }
}

describe("ShoppingCart", () => {
     // afterEach(() => jest.clearAllMocks)
     it("should be an empty cart when don't have products", () => {
          const { sut } = createSUT()

          expect(sut.isEmpty()).toBe(true)
     })

     it("should have 2 cart items with addItem()", () => {
          const { sut } = createSutWithProducts()
          expect(sut.items.length).toBe(2)
     })
     it("should test total() and totalWithDiscount()", () => {
          const { sut } = createSutWithProducts()
          expect(sut.total()).toBe(43)
          expect(sut.totalWithDiscount()).toBe(43)
     })

     it("should add products and clear cart", () => {
          const { sut } = createSutWithProducts()
          expect(sut.items.length).toBe(2)
          sut.clear()
          expect(sut.items.length).toBe(0)
          expect(sut.isEmpty()).toBe(true)
     })

     it("should remove products", () => {
          const { sut } = createSutWithProducts()
          expect(sut.items.length).toBe(2)
          sut.removeItem(1)
          expect(sut.items.length).toBe(1)
          sut.removeItem(0)
          expect(sut.isEmpty()).toBe(true)
     })

     it("should call discount.calculate() with total price when totalWithDiscount is called", () => {
          const { sut, discountMock } = createSutWithProducts()
          const discountMockSpy = jest.spyOn(discountMock, "calculate")
          sut.totalWithDiscount()
          expect(discountMockSpy).toHaveBeenCalledWith(sut.total())
     })
})
