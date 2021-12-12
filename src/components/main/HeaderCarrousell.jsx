import { useEffect, useState } from 'react'
import carrousel_images from '../../assets/data/carrusel_images.json'
import { getPublicImage } from '../../common/images'
import { useProducts } from '../../contexts/ProductContext'
import Carrousell from '../products/Carrousell'
const carrousell_routes = carrousel_images.map(image => getPublicImage(image))

const HeaderCarrousell = () => {

    const { products } = useProducts()

    const [images, setImages] = useState(carrousell_routes)

    useEffect(() => {
        if (!products) {
            return
        }
        const imagesFromProducts = products.flatMap(product => {
            const productImages = product.product.photos?.map(photo => photo.photo) ?? []
            const variantImages = product.variants?.flatMap(variant => variant?.photos.map(photo => photo.photo)) ?? []
            return [...productImages, ...variantImages]
        })
        setImages([...images, ...imagesFromProducts])
    }, [products])

    return (
        <div className='flex w-full p-6'>
            <Carrousell
                className='w-full h-[60vh] text-gray-100'
                images={images}
                slideTime={10000}
            />
        </div>
    )
}

export default HeaderCarrousell
