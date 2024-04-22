import { getProductDetail } from "@/app/_lib/services/products.service"



export const generateMetadata = async ({ params }) => {
    const productMetaDetails = await getProductDetail(params.pid)
    return {
        title: productMetaDetails.title,
        description: productMetaDetails.description
    }
}


async function ProductPage({ params }) {
    const { pid } = params


    const detailData = await getProductDetail(pid)

    if (!detailData) return <p>No product detail found</p>
    return (
        <div>
            <h1>{detailData.title}</h1>
            <p>{detailData.description}</p>
        </div>
    )
}

export default ProductPage