import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useAdmin } from '../../contexts/AdminContext'


const RouteButton = (props) => {

    const { to, children } = props
    const [focused, setFocused] = useState()

    return (
        <Link
            className='focus:outline-none'
            to={to}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        >
            <div className={clsx(
                'bg-terceary',
                'font-bold',
                'text-primary',
                'rounded-full',
                'px-2',
                'py-1',
                'border',
                'border-transparent',
                'hover:opacity-70',
                'hover:border-quaternary',
                'hover:scale-105',
                focused && [
                    'opacity-70',
                    'border-quaternary',
                    'scale-105',
                    'outline-none'
                ]

            )}
            >
                {children}
            </div>
        </Link>
    )
}


const AdminNavigation = () => {
    const {logout} = useAdmin()
    return (
        <div
            className={clsx(
                'flex',
                'items-center',
                'justify-between',
                'w-full h-12',
                'bg-primary',
                'rounded-full',
                'px-2 py-1'
            )}
        >
            <div className='flex space-x-1 md:space-x-3'>
                <RouteButton to='/products'>
                    Productos
                </RouteButton>
                <RouteButton to='/orders'>
                    Ordenes
                </RouteButton>
               
            </div>
            <button
                className={clsx(
                    'flex',
                    'items-center',
                    'space-x-1',
                    'bg-terceary',
                    'font-bold',
                    'text-primary',
                    'rounded-full',
                    'px-2',
                    'py-1',
                    'border',
                    'border-transparent',
                    'hover:opacity-70',
                    'hover:border-quaternary',
                    'hover:scale-105'
                )}
                onClick={logout}
            >
                <span>
                    Salir
                </span>
                <FiLogOut className='text-black' />
            </button>
        </div>
    )
}

export default AdminNavigation
