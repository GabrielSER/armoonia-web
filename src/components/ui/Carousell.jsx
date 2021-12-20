import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'

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
                'w-8',
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

const Carousell = (props) => {

    const { images, className, slideTime=5000 } = props
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        setIndex(0)
    }, [images])

    const getImage = useCallback(() => {
      return images[index]  
    }, [images, index])

    const next = useCallback(() => {
        const nextIndex = index === images.length - 1 ? 0 : index + 1
        if(nextIndex !== index) {
            setIndex(nextIndex)
        }
    }, [index, images])

    const previous = useCallback(() => {
        const previousIndex = index === 0 ? images.length - 1 : index - 1
        if(previousIndex !== index) {
            setIndex(previousIndex)
        }
    }, [index, images])

    useEffect(() => {
        const intervalId = setInterval(() => {
            next()
        }, slideTime)
        return () => clearInterval(intervalId)
    }, [next, slideTime])

    return (
        <div
            className={clsx(
                'flex',
                'relative',
                className
            )}
        >
            {
                images.length > 1 &&
                <Arrow onClick={previous} >
                    <BsChevronCompactLeft />
                </Arrow>
            }
            {
                index >= 0 &&
                <img
                    className='w-full h-full object-cover'
                    src={getImage()}
                    alt=''
                />
            }
            {
                images.length > 1 &&
                <Arrow
                    className='right-0'
                    onClick={next}>
                    <BsChevronCompactRight />
                </Arrow>
            }
        </div>
    )
}

export default Carousell