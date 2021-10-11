
import Logo from '../ui/Logo'
import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import clsx from 'clsx'

const initialSearch = {
    searchb: ''
}

const Header = () => {

    const [state, setState] = useState(initialSearch)

    const set = (event) => {
        const { id, value } = event.target
        setState({ ...state, [id]: value })
    }

    const search = () => {
        alert(JSON.stringify(state))
    }

    return (
        <div
            className={clsx(
                'flex',
                'flex-shrink-0',
                'w-full',
                'h-24 md:h-36',
                'p-4',
                'bg-gold',
                'shadow-lg'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'w-full h-full',
                    'gap-2 md:gap-4',
                    'items-center'
                )}
            >
                <Logo
                    className={clsx(
                        'object-contain',
                        'h-full',
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
                    <span className='text-secondary'>
                        ARMOONIA
                    </span>
                    con lo que eres
                </span>
                <div class="flex md:p-52">
                    <div
                        className={clsx(
                            'container',
                            'flex',
                            'justify-around items-center',
                            'h-36'
                        )}
                    >
                        <div className='flex w-10 md:p-6 md:justify-evenly'>
                            <div className="absolute top-4 left-3">
                                <i className={clsx(
                                    'fa fa-search',
                                    'text-gray-400',
                                    'md:z-20',
                                    'hover:text-gray-500'
                                )}
                                />
                            </div>
                            <Input
                                id='search'
                                value={state.searchb}
                                onChange={set}
                            />
                            <div class="flex"> <Button onClick={search}>
                                Search
                            </Button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
