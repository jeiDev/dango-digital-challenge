import { PayloadAction } from "@reduxjs/toolkit"
import { ItemProductReduxSliceI, ProductReduxSliceI } from "src/redux/types/product.type"

const addCartItem = (state: ProductReduxSliceI, action: PayloadAction<ItemProductReduxSliceI>) => {
    state.cart = [...state.cart, action.payload]
    return state
}

export default addCartItem