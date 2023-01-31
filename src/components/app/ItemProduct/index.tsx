import Star from "@svg/star.svg"
import Heart from "@svg/heart-light.svg"
import { useDispatch } from "react-redux"
import ShoppingCart from "@svg/shopping-cart.svg"
import { ItemProductPropsI } from "./ItemProduct.interface"
import Image from "next/image"

import style from "./ItemProduct.module.css"
import { useCallback } from "react"
import { ItemProductReduxSliceI } from "@redux/types/product.type"
import { cartAddItemReducer, addFavoriteItemReducer } from "@redux/slices/products"

const stars = "-".repeat(5).split("")

export const ProductItem = ({ item }: ItemProductPropsI) => {
    const dispatch = useDispatch()

    const addCartHandle = useCallback((item: ItemProductReduxSliceI) => {
        dispatch(cartAddItemReducer(item))
    }, [])


    const addFavoriteHandle = useCallback((item: ItemProductReduxSliceI) => {
        dispatch(addFavoriteItemReducer(item))
    }, [])

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className={style.product}>
                <div className={style.boxHeart} onClick={() => (addFavoriteHandle(item))}>
                    <Heart />
                </div>
                <div className={style.boxImage}>
                    <Image src={item.image} alt={item.title} height={100} width={180} />
                </div>
                <div className={style.boxInfo}>
                    <div className={style.hover}>
                        <div className={style.button} onClick={() => addCartHandle(item)}>
                            Add to card
                            <div className={style.boxShoppingCart}><ShoppingCart /></div>
                        </div>
                        <div className={style.button}>Edit</div>
                    </div>
                    <div>
                        <h6 className={style.title}>{item.title}</h6>
                        <span className={style.price}>${item.price.toFixed(2)}</span>
                        <div className={style.containStar}>
                            {stars.map((_, i) => (
                                <div className={style.boxStar}>
                                    <Star key={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}