export const getProduct = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_SERVER_URL}/products`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getProductDetail = async (pid) => {
    try {
        const response = await fetch(`${process.env.NEXT_SERVER_URL}/products/${pid}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}
