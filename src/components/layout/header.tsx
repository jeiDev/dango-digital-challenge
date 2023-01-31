import { HeaderPropsI } from "./layout.interface"

import User from "@svg/user.svg"
import Heart from "@svg/heart.svg"
import ShoppingCard from "@svg/shopping-cart.svg"

import style from "./layout.module.css"
import { ButtonNav } from "@components/app/ButtonNav"

export const Header = ({ }: HeaderPropsI) => {

    return (
        <header className={style.header}>
            <div className="container">
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
                            count={{value: 0}}
                        >Favorites</ButtonNav>

                        <ButtonNav
                            count={{value: 0}}
                            Icon={ShoppingCard}
                        >Cart</ButtonNav>
                    </div>
                </div>
            </div>
        </header>
    )
}