import { ComponentElement, ReactNode } from "react"

export interface CountI{
    value: number
}

export interface ButtonNavPropsI{
    children: ReactNode
    Icon: Function
    count?: CountI
}