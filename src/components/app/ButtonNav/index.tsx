import { ButtonNavPropsI } from "./ButtonNav.interface"

import style from "./ButtonNav.module.css"

export const ButtonNav = ({ Icon, children, count }: ButtonNavPropsI) => {

    return (
        <div className={style.button}>
            <Icon />
            { count && (<div className={style.count}>{count.value}</div>)}
            <span className={style.text}>{children}</span>
        </div>
    )
}