import { Layout } from "@components/layout"
import { ReactNode } from "react"

export default function Home() {
  return (
    <div>
        Home
    </div>
  )
}

Home.getLayout = function getLayout(children: ReactNode) {
  return (
    <Layout title="Home">{children}</Layout>
  )
}
