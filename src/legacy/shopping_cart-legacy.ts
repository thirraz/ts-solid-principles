type CartItem = { name: string; price: number }
type OrderStatus = "open" | "closed"

export class ShoppingCartLegacy {
     private readonly _items: CartItem[] = []
     private _orderStatus: OrderStatus = "open"

     addItem(item: CartItem): void {
          this._items.push(item)
     }

     removeItem(index: number): void {
          this._items.splice(index, 1)
     }

     get items(): Readonly<CartItem[]> {
          return this._items
     }

     get orderStatus(): OrderStatus {
          return this._orderStatus
     }

     total(): number {
          // o '+' irá converter o resultado para number
          return +this._items
               .reduce((total, next) => total + next.price, 0)
               .toFixed()
     }

     checkout(): void {
          if (this.isEmpty()) {
               console.log("Your cart is empty. Please try to buy something...")
               return
          }

          this._orderStatus = "closed"
          this.sendMessage(
               `Your request has been received! Total is U$ ${this.total()}`,
          )
          this.saveOrder()
          this.clear()
     }

     isEmpty(): boolean {
          return this._items.length === 0
     }

     sendMessage(msg: string): void {
          console.log(`Your message has been sent! (${msg})`)
     }

     saveOrder(): void {
          console.log("Request saved successfully!")
     }

     clear(): void {
          console.log("Shopping cart cleaned!")
          this._items.length = 0
     }
}

const shoppingCart = new ShoppingCartLegacy()
shoppingCart.addItem({ name: "T-Shirt", price: 25.9 })
shoppingCart.addItem({ name: "Notepad", price: 9.9 })
shoppingCart.addItem({ name: "Pen", price: 2.9 })

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.orderStatus)
shoppingCart.checkout()
console.log(shoppingCart.orderStatus)
