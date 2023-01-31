import { PayloadAction } from "@reduxjs/toolkit"
import { ItemProductReduxSliceI, ProductReduxSliceI } from "src/redux/types/product.type"

const updateItemFormUpdate = (state: ProductReduxSliceI, action: PayloadAction<ItemProductReduxSliceI | null>) => {
    state.itemEdit = action.payload || undefined
    return state
}

export default updateItemFormUpdate