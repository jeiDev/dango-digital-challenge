import { createSlice } from '@reduxjs/toolkit'
import { ProductReduxSliceI } from 'src/redux/types/product.type'

import productAdd from './addItem.reducer'
import productEdit from './editItem.reducer'
import cartAddItem from './addCartItem.reducer'
import updateItemForUpdate from './updateItemForUpdate.reducer'

export const initialProductSlice: ProductReduxSliceI = {
    favorites: [],
    cart: [],
    itemEdit: null,
    items: [
        { title: "Camera Canon", id: 1675154046774, price: 350, image: "/images/camera.png" },
        { title: "Wireless headphones", id: 1675154118182, price: 11.50, image: "/images/headphone.png" },
        { title: "Play game", id: 1675154130368, price: 50, image: "/images/control.png" },
        { title: "Tablet as a laptop", id: 1675154137750, price: 36, image: "/images/laptop.png" },
        { title: "Wireless headphones", id: 1675154146110, price: 5, image: "/images/headphone.png" },
        { title: "Play game", id: 1675154156752, price: 112, image: "/images/control.png" },
        { title: "Tablet as a laptop", id: 1675154166965, price: 15, image: "/images/laptop.png" }
    ]
}

export const productSlice = createSlice({
    initialState: initialProductSlice,
    name: "products",
    reducers: {
        editProductReducer: productEdit,
        addProductReducer: productAdd,
        cartAddItemReducer: cartAddItem,
        updateItemForUpdateReducer: updateItemForUpdate
    }
})

export const { 
    addProductReducer, editProductReducer, cartAddItemReducer, updateItemForUpdateReducer
} = productSlice.actions;

export default productSlice.reducer;