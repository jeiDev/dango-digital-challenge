import { ReactNode } from "react"
import { RootState } from "@redux/store"
import { useSelector } from "react-redux"
import { Layout } from "@components/layout"
import { ProductItem } from "@components/app/ItemProduct"

export default function Home() {
  const { items } = useSelector((state: RootState) => state.product)

  console.log({ items })

  return (
    <section>
      <div className="container">
        <div className="row" style={{ padding: "90px 0"}}>
          {items.map((item, i) => (
            <ProductItem key={i} item={item}/>
          ))}
        </div>
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="Home">{children}</Layout>
  )
}
