import Logo from '../ui/Logo'
import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

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
        <div className='flex p-4 flex-shrink-0 w-full h-24 md:h-36 bg-gold shadow-lg'>
            <div className='flex gap-2 md:gap-4 w-full h-full items-center'>
                <Logo className='object-contain h-full md:hidden' />
                <span className='hidden md:flex flex-wrap md:gap-x-2 text-gray-800 font-moontime text-xl md:text-4xl font-black  '>
                    La belleza de estar en
                    <span className='text-secondary'>
                        ARMOONIA
                    </span>
                    con lo que eres
                </span>
                <div class="flex md:p-52">
                    <div className='container h-36 flex justify-around items-center'>
                        <div className='flex w-10 md:p-6 md:justify-evenly'>
                            <div className="absolute top-4 left-3"> <i class="fa fa-search text-gray-400 md:z-20 hover:text-gray-500"></i> </div>
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
        </div>
    )
}

export default Header
