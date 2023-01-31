import { ReactNode } from "react"
import { RootState } from "@redux/store"
import { useSelector } from "react-redux"
import { Layout } from "@components/layout"
import { ProductItem } from "@components/app/ItemProduct"

export default function Home() {
  const { items } = useSelector((state: RootState) => state.product)

  return (
    <section>
      <div className="container">
        <div className="row" style={{ padding: "90px 0" }}>
          <div className="col-12">

          </div>

          <div className="col-12">
            <div className="row">
              {items.map((item, i) => (
                <ProductItem key={i} item={item} />
              ))}
            </div>
          </div>
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
