//srp

// main is a place to import all dependencies, inject dependencies, start program, etc

import { Order } from "./classes/order"
import { ShoppingCart } from "./classes/shopping_cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"

const shoppingCart = new ShoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product("T-Shirt", 25.9))
shoppingCart.addItem(new Product("Notepad", 9.9))
shoppingCart.addItem(new Product("Pen", 2.9))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
