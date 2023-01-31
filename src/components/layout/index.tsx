import { Header } from "./header";
import { LayoutPropsI } from "./layout.interface";

export const Layout = ({ children, title }: LayoutPropsI) => {

    return (
        <div>
            <Header title={title}/>
            <main>{children}</main>
        </div>
    )
}