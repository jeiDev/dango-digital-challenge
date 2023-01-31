import { PayloadAction } from "@reduxjs/toolkit"
import { ItemProductReduxSliceI, ProductReduxSliceI } from "src/redux/types/product.type"

export default (state: ProductReduxSliceI, action: PayloadAction<ItemProductReduxSliceI>) => {
    state.favorites = [...state.favorites, action.payload]
    return state
}