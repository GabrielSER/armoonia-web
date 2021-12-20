
import Logo from '../ui/Logo'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useAdmin } from '../../contexts/AdminContext'
import AdminNavigation from './AdminNavigation'
import { BsSearch } from 'react-icons/bs'
import { BsFillCartFill } from 'react-icons/bs'
import { useProducts } from '../../contexts/ProductContext'
import { useCart } from '../../contexts/CartContext'
import Badge from '../ui/Badge'
import { Link } from 'react-router-dom'

const CartButton = (props) => {

    const { cartProducts } = useCart()
    const { className } = props
    const properties = { ...props }
    delete properties.className

    return (
        <div className='h-14 xs:h-min'>
            <div>
                <Link
                    className={clsx(
                        'flex',
                        'w-10 h-10',
                        'justify-center',
                        'items-center',
                        'rounded-full',
                        'bg-secondary/50',
                        'text-2xl',
                        'transition duration-200 ease-in-out',
                        'hover:opacity-70',
                        'hover:scale-110',
                        'border-2 border-primary',
                        className
                    )}
                    to='/cart'
                >
                    {properties.children}
                </Link>
                {
                    cartProducts.length > 0 &&
                    <div className='relative flex'>
                        <Badge text={cartProducts.length} />
                    </div>
                }
            </div>
        </div>
    )
}

const SearchInput = () => {

    const [inputValue, setInputValue] = useState('')
    const { setSearchInput } = useProducts()

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            search()
        }, 300)
        return () => clearTimeout(timeOutId)
    }, [inputValue])

    const search = () => {
        setSearchInput(inputValue)
    }

    return (
        <div className='flex flex-row space-x-5'>
            <CartButton className='text-primary'>
                <BsFillCartFill />
            </CartButton>
            <div
                className={clsx(
                    'flex',
                    'h-10',
                    'pl-5',
                    'rounded-full',
                    'bg-white',
                    'border',
                    'border-primary'
                )}
            >
                <input
                    className={clsx(
                        'px-2 py-1',
                        'appearance-none',
                        'bg-transparent',
                        'focus:outline-none'
                    )}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button
                    className={clsx(
                        'flex',
                        'py-1 px-3',
                        'space-x-1',
                        'justify-center',
                        'items-center',
                        'rounded-r-full',
                        'shadow-md',
                        'bg-primary',
                        'text-sm md:text-lg',
                        'text-secondary',
                        'font-bold',
                        'hover:opacity-70',
                        'focus:opacity-70',
                        'focus:border',
                        'focus:border-quaternary',
                        'focus:outline-none'
                    )}
                    onClick={search}
                >
                    <BsSearch />
                    <span className='hidden md:flex'>
                        Buscar
                    </span>
                </button>
            </div>
        </div>
    )
}

const Title = () => {
    return (
        <p
            className={clsx(
                'hidden xs:flex',
                'w-full',
                'gap-x-2',
                'p-1',
                'text-2xl sm:text-3xl',
                'text-gray-800',
                'font-moontime',
                'font-black',
                'truncate'
            )}
        >
            <span>La belleza de estar en</span>
            <span className='flex text-md items-baseline text-primary'>
                ARMOONIA
            </span>
            <span>con lo que eres</span>
        </p>
    )
}

const Header = () => {

    const { validated } = useAdmin()

    return (
        <div
            className={clsx(
                'flex',
                'flex-initial',
                'w-full',
                (validated ? 'h-40' : 'h-min'),
                'bg-secondary',
                'shadow-lg',
                'overflow-x-hidden',
                'overflow-y-hidden'
            )}
        >
            <div className='hidden xs:flex w-36 p-1 justify-center'>
                <Logo />
            </div>
            <div className='flex flex-col w-full gap-1 p-1'>
                {
                    validated &&
                    <AdminNavigation />
                }
                <div
                    className={clsx(
                        'flex',
                        'flex-col lg:flex-row-reverse',
                        'w-full',
                        'gap-1'
                    )}
                >
                    <div className='flex w-full justify-between xs:justify-end'>
                        <Logo className='flex xs:hidden h-10' />
                        <SearchInput />
                    </div>
                    <Title />
                </div>
            </div>
        </div>
    )
}

export default Header
