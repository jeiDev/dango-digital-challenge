import { PayloadAction } from "@reduxjs/toolkit"
import { ItemProductReduxSliceI, ProductReduxSliceI } from "src/redux/types/product.type"

export default (state: ProductReduxSliceI, action: PayloadAction<ItemProductReduxSliceI>) => {
    state.cart = [...state.cart, action.payload]
    return state
}