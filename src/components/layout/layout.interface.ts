import { ReactNode } from "react"

export interface HeaderPropsI{
    title: string
}

export interface LayoutPropsI extends HeaderPropsI{
    children: ReactNode
}