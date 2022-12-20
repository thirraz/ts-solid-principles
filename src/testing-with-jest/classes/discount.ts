export abstract class Discount {
     protected discountValue = 0

     calculate(price: number): number {
          return price - price * this.discountValue
     }
}

export class FiftyPercentDiscount extends Discount {
     protected readonly discountValue = 0.5
}

export class TenPercentDiscount extends Discount {
     protected readonly discountValue = 0.1
}

export class NoDiscount extends Discount {}
