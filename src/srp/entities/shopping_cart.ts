import { CartItem } from "./interfaces/cartItem"
import { OrderStatus } from "./interfaces/orderStatus"

export class ShoppingCart {
     private readonly _items: CartItem[] = []

     addItem(item: CartItem): void {
          this._items.push(item)
     }

     removeItem(index: number): void {
          this._items.splice(index, 1)
     }

     get items(): Readonly<CartItem[]> {
          return this._items
     }

     total(): number {
          // o '+' irá converter o resultado para number
          return +this._items
               .reduce((total, next) => total + next.price, 0)
               .toFixed()
     }

     isEmpty(): boolean {
          return this._items.length === 0
     }

     clear(): void {
          console.log("Shopping cart cleaned!")
          this._items.length = 0
     }
}
