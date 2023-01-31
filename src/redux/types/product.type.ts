export interface ItemProductReduxSliceI{
   title: string
   price: number
   image: string
   id: number
}

export interface EditProductI{
    id: number
    data: ItemProductReduxSliceI
}

export interface ProductReduxSliceI{
    items: ItemProductReduxSliceI[]
    favorites: ItemProductReduxSliceI[]
    cart: ItemProductReduxSliceI[]
}