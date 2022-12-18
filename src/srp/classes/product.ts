import { CartItem } from "../classes/interfaces/cartItem"
export class Product implements CartItem {
     constructor(public name: string, public price: number) {}
}
