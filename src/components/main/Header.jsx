
import Logo from '../ui/Logo'
import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import clsx from 'clsx'
import { useAdmin } from '../../contexts/AdminContext'
import AdminNavigation from './AdminNavigation'
import { BsSearch } from 'react-icons/bs'


const SearchInput = () => {

    const [inputValue, setInputValue] = useState('')

    const search = () => {
        alert(JSON.stringify(inputValue))
    }

    return (
        <div className='md:pr-4'>
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
                    onClick={search}>
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
        <span
            className={clsx(
                'hidden md:flex',
                'flex-wrap',
                'md:gap-x-2',
                'text-2xl md:text-3xl',
                'text-gray-800',
                'font-moontime',
                'font-black'
            )}
        >
            La belleza de estar en
            <span className='text-primary'>
                ARMOONIA
            </span>
            con lo que eres
        </span>
    )
}


const Header = () => {

    const { validated } = useAdmin()

    return (
        <div
            className={clsx(
                'flex',
                'w-full',
                'h-24 md:h-32',
                'flex-initial',
                'bg-secondary',
                'shadow-lg'
            )}
        >
            <Logo className='w-24 md:w-32 p-2' />
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'w-full',
                    'justify-center',
                    'overflow-y-hidden',
                    'overflow-x-hidden',
                    'p-1',
                    'space-y-2'
                )}
            >
                {
                    validated &&
                    <AdminNavigation />
                }
                <div
                    className={clsx(
                        'flex',
                        'flex-row-reverse',
                        'justify-center',
                        'justify-between',
                        'flex-shrink-0',
                        'w-full'
                    )}>
                    <SearchInput />
                    <Title />

                </div>
            </div>
        </div>
    )
}

export default Header
