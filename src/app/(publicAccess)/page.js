// import ProductsListing from "@/components/Products/ProductsListing"
import SignoutBtn from "@/components/Buttons/SignoutBtn"
import { getProduct } from "../_lib/services/products.service"


export const metadata = {
  title: 'Home page'
}




async function HomePage() {
  const products = await getProduct()
  return (
    <>
    {/* // <ProductsListing products={products} /> */}
      <h1>lklk</h1>
      <SignoutBtn />
    </>
  )
}

export default HomePage