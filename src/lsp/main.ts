/* Liskov Substituition Principle => Subtipos precisam ser substituíveis por seus tipos de base.
     Explicação mais simples: Se meu programa espera um Animal, algoo do tipo Cachorro 
          (que herda de animal) deve servir como qualquer outro Animal.
*/

// main is a place to import all dependencies, inject dependencies, start program, etc

import { Order } from "./classes/order"
import { ShoppingCart } from "./classes/shopping_cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import {
     FiftyPercentDiscount,
     TenPercentDiscount,
     NoDiscount,
} from "./classes/interfaces/discount"

// const fiftyPercentDiscount = new FiftyPercentDiscount()
// const tenPercentDiscount = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product("T-Shirt", 49.91))
shoppingCart.addItem(new Product("Notepad", 9.9123))
shoppingCart.addItem(new Product("Pen", 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
