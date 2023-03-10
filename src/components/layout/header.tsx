import { HeaderPropsI } from "./layout.interface"

import User from "@svg/user.svg"
import Heart from "@svg/heart.svg"
import ShoppingCard from "@svg/shopping-cart.svg"

import style from "./layout.module.css"
import { ButtonNav } from "@components/app/ButtonNav"
import { useSelector } from "react-redux"
import { RootState } from "@redux/store"
import { useCallback } from "react"

export const Header = ({ }: HeaderPropsI) => {
    const { cart, items } = useSelector((state: RootState) => state.product)

    const favoritesLength = useCallback(() => {
        return items.filter(i => (i.favorite)).length
    }, [items])

    return (
        <header className={style.header}>
            <div className={style.box}>
                <div className={style.boxLogo}>
                    <h1>Dango</h1>
                </div>
                <div className={style.boxSearch}>
                    <div className={style.search}>
                        <div>
                            <input type="text" placeholder="Search any things..." />
                        </div>
                        <div>Search</div>
                    </div>
                </div>
                <div className={style.boxMenu}>
                    <ButtonNav
                        Icon={User}
                    >Sign In</ButtonNav>

                    <ButtonNav
                        Icon={Heart}
                        count={{ value: favoritesLength() }}
                    >Favorites</ButtonNav>

                    <ButtonNav
                        count={{ value: cart.length }}
                        Icon={ShoppingCard}
                    >Cart</ButtonNav>
                </div>
            </div>
        </header>
    )
}