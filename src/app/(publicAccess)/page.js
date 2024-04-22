import ProductsListing from "@/components/Products/ProductsListing"
import { getProduct } from "../_lib/services/products.service"


export const metadata = {
  title: 'Home page'
}




async function HomePage() {
  const products = await getProduct()
  return (
    <ProductsListing products={products} />
  )
}

export default HomePage