
import Link from 'next/link'
import AddCartBtn from '../Buttons/AddCartBtn'

function ProductsListing(props) {
    const { products } = props
    if (!products) return <p>No Products found</p>
    return (
        <div>
            {
                products.products.map((product, idx) => {
                    return <div key={idx}>
                        <Link href={`/product/${product.id}`}>
                            {product.title}
                        </Link>
                        <AddCartBtn />
                    </div>
                })
            }
        </div>
    )
}

export default ProductsListing