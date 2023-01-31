import { PayloadAction } from "@reduxjs/toolkit"
import { EditProductI, ProductReduxSliceI } from "src/redux/types/product.type"

export default (state: ProductReduxSliceI, action: PayloadAction<EditProductI>) => {
    const arrItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
            return { ...item, ...action.payload.data }
        }
        return item
    });

    state.items = arrItems
    return state
}