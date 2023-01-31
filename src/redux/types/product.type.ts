export interface ItemProductReduxSliceI{
   title: string
   price: number
   image: string
   favorite?: boolean
   id: number
}

export interface EditProductI{
    id: number
    data: ItemProductReduxSliceI
}

export interface ProductReduxSliceI{
    itemEdit?: ItemProductReduxSliceI | null
    items: ItemProductReduxSliceI[]
    favorites: ItemProductReduxSliceI[]
    cart: ItemProductReduxSliceI[]
}