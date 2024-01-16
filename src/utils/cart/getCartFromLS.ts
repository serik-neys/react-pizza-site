import { CartItem } from "../../redux/cart/types"
import { priceSum } from "./priceSum"

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = priceSum(items)

    return {
        items: items as CartItem[],
        totalPrice
    }
}