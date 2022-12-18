//interfaces
import { OrderStatus } from "../classes/interfaces/orderStatus"

//classes
import { Messaging } from "../services/messaging"
import { ShoppingCart } from "./shopping_cart"
import { Persistency } from "../services/persistency"

export class Order {
     private _orderStatus: OrderStatus = "open"

     constructor(
          private readonly cart: ShoppingCart,
          private readonly messaging: Messaging,
          private readonly persistency: Persistency,
     ) {}

     get orderStatus(): OrderStatus {
          return this._orderStatus
     }

     checkout(): void {
          if (this.cart.isEmpty()) {
               console.log("Your cart is empty. Please try to buy something...")
               return
          }

          this._orderStatus = "closed"
          this.messaging.sendMessage(
               `Your request has been received! Total is U$ ${this.cart.total()}`,
          )
          this.persistency.saveOrder()
          this.cart.clear()
     }
}
