import { CartItem } from "../entities/interfaces/cartItem"
export class Product implements CartItem {
     constructor(public name: string, public price: number) {}
}
