// main is a place to import all dependencies, inject dependencies, start program, etc

import { Order } from "./classes/order"
import { ShoppingCart } from "./classes/shopping_cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { IndividualCustomer, EnterpriseCustomer } from "./classes/customer"

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
/* 
const individualCustomer = new IndividualCustomer(
     "Luiz",
     "Miranda",
     "111.111.111-11",
) */

const enterpriseCustomer = new EnterpriseCustomer(
     "Big Enterprise",
     "03.778.130/0001-48",
)
const order = new Order(
     shoppingCart,
     messaging,
     persistency,
     enterpriseCustomer,
)

shoppingCart.addItem(new Product("T-Shirt", 49.91))
shoppingCart.addItem(new Product("Notepad", 9.9123))
shoppingCart.addItem(new Product("Pen", 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
