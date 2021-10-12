
import Logo from '../ui/Logo'
import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import clsx from 'clsx'
import { useAdmin } from '../../contexts/AdminContext'


const SearchInput = () => {

    const [inputValue, setInputValue] = useState('')

    const search = () => {
        alert(JSON.stringify(inputValue))
    }

    return (
        <div
            className={clsx(
                'flex',
                ''
            )}
        >
            <Input
                id='search'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <Button onClick={search}>
                Search
            </Button>
        </div>
    )
}

const AdminNavigation = (params) => {
    return (
        <div
            className={clsx(
                'flex',
                'items-center',
                'w-full h-12',
                'bg-primary',
                'rounded-l-full',
                'px-4 py-1'
            )}>
            <Button>
                Ordenes
            </Button>
        </div>
    )
}

const Header = () => {

    const { validated } = useAdmin()

    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'justify-between',
                'flex-shrink-0',
                'w-full',
                'p-4',
                'bg-secondary',
                'shadow-lg'
            )}
        >
            {
                validated &&
                <AdminNavigation />
            }
            <div
                className={clsx(
                    'flex',
                    'items-center',
                    'justify-between',
                    'flex-shrink-0',
                    'w-full',
                )}>
                <Logo
                    className={clsx(
                        'object-contain',
                        'h-16 md:h-20',
                        'md:hidden'
                    )}
                />
                <span
                    className={clsx(
                        'hidden md:flex',
                        'flex-wrap',
                        'md:gap-x-2',
                        'text-2xl lg:text-4xl',
                        'text-gray-800',
                        'font-moontime font-black',
                    )}
                >
                    La belleza de estar en
                    <span className='text-primary'>
                        ARMOONIA
                    </span>
                    con lo que eres
                </span>
                <SearchInput />
            </div>

        </div>
    )
}

export default Header
