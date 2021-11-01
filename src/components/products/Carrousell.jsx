import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'
import carrousel_images from '../../assets/data/carrusel_images.json'
import { getPublicImage } from '../../common/images'
const carrousell_routes = carrousel_images.map(image => getPublicImage(image))

const Arrow = (props) => {

    const properties = { ...props }
    delete properties.className

    return (
        <button
            className={clsx(
                'flex',
                'absolute',
                'items-center',
                'justify-center',
                'w-12',
                'h-full',
                'hover:bg-shadow',
                'text-2xl',
                'focus:outline-none',
                'focus:bg-shadow',
                props.className
            )}
            {...properties}
        />
    )
}

const Carrousell = () => {

    const [images, setImages] = useState(carrousell_routes)
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = useCallback(() => {
        const nextIndex = index === images.length - 1 ? 0 : index + 1
        setIndex(nextIndex)
    }, [index, images])

    const previous = useCallback(() => {
        const previousIndex = index === 0 ? images.length - 1 : index - 1
        setIndex(previousIndex)
    }, [index, images])

    useEffect(() => {
        const intervalId = setInterval(() => {
            next()
        }, 10000)
        return () => clearInterval(intervalId)
    }, [next])

    return (
        <div className='flex p-6 w-full'>
            <div
                className={clsx(
                    'flex',
                    'relative',
                    'w-full h-[60vh]',
                    'text-gray-100'
                )}
            >
                <Arrow onClick={previous} >
                    <BsChevronCompactLeft />
                </Arrow>
                {
                    index >= 0 &&
                    <img
                        className='w-full h-full object-cover'
                        src={images[index]}
                    />
                }
                <Arrow
                    className='right-0'
                    onClick={next}>
                    <BsChevronCompactRight />
                </Arrow>
            </div>
        </div>

    )
}

export default Carrousell