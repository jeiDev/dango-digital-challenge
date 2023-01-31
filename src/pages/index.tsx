import { ReactNode, useCallback } from "react"
import { RootState } from "@redux/store"
import { useDispatch, useSelector } from "react-redux"
import { Layout } from "@components/layout"
import { ProductItem } from "@components/app/ItemProduct"

import style from "@styles/Home.module.css"
import { editProductReducer, updateItemForUpdateReducer } from "@redux/slices/products"

export default function Home() {
  const dispatch = useDispatch()
  const { items, itemEdit } = useSelector((state: RootState) => state.product)

  const changeTitleHandle = useCallback((title: string) => {
    if(!itemEdit) return
    dispatch(editProductReducer({id: itemEdit.id, data: {...itemEdit, title}}))
  }, [itemEdit])

  const changePriceHandle = useCallback((price: string) => {
    if(!itemEdit) return
    dispatch(editProductReducer({id: itemEdit.id, data: {...itemEdit, price: parseFloat(price)}}))
  }, [itemEdit])

  const saveHandle = useCallback(() => {
    dispatch(updateItemForUpdateReducer(null))
  }, [itemEdit])

  return (
    <section>
      <div className="container">
        <div className={`row ${style.row}`}>
          <div className="col-12">
            <div className={`${style.boxUpdate} ${itemEdit ? style.boxUpdateActive : ""}`}>
              <div className={`row ${style.contentUpdate}`}>
                <div className="col-7">
                  <input type="text" placeholder="Title" defaultValue={itemEdit?.title} onChange={(e) => changeTitleHandle(e.target.value)}/>
                </div>
                <div className="col-3">
                  <input type="text" placeholder="Price" defaultValue={itemEdit?.price} onChange={(e) => changePriceHandle(e.target.value)}/>
                </div>
                <div className="col-2">
                  <div className={style.buttonSaveEdit} onClick={() => saveHandle()}>Save</div>
                </div>
              </div>
            </div>
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
