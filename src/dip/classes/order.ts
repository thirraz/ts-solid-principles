//interfaces
import { OrderStatus } from "./interfaces/orderStatus"
import { CustomerOrder } from "./interfaces/customerProtocol"
//protocols
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol"
import { MessagingProtocol } from "./interfaces/messaging-protocol"
import { PersistencyProtocol } from "./interfaces/persistency-protocol"

export class Order {
     private _orderStatus: OrderStatus = "open"

     constructor(
          private readonly cart: ShoppingCartProtocol,
          private readonly messaging: MessagingProtocol,
          private readonly persistency: PersistencyProtocol,
          private readonly customer: CustomerOrder,
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
          console.log(
               `Client Name: ${this.customer.getName()}, Client Identification Number: ${this.customer.getIDN()}`,
          )
     }
}
