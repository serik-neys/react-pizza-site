import { CartItem } from "../../redux/cart/types"

export const priceSum = (items: CartItem[]) => {
    return items.reduce( (sum, obj) => {
        return (obj.price * obj.count) + sum
    }, 0)

}