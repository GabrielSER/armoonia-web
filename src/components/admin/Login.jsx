import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { useAdmin } from '../../contexts/AdminContext'
import clsx from 'clsx'
import { useHistory } from 'react-router'
import GreenInput from '../ui/GreenInput'

const initialState = {
    username: '',
    password: ''
}

const Login = () => {

    const history = useHistory()
    const { login } = useAdmin()
    const [state, setState] = useState(initialState)
    console.log(state)

    const set = (event) => {
        const { id, value } = event.target
        setState({ ...state, [id]: value })
    }

    const signIn = async () => {
        try {
            await login(state.username, state.password)
            history.push('/products')
        }
        catch (error) {
            console.log('Cagaste light')
        }
    }

    return (
        <div
            className={clsx(
                'flex',
                'w-full h-full',
                'justify-center',
                'items-center',
                'bg-gradient-to-br',
                'from-primary/70',
                'to-secondary'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'gap-4',
                    'w-64 md:w-96',
                    'bg-primary',
                    'p-0.5',
                    'justify-center',
                    'rounded-md',
                    'bg-gold',
                    'shadow-lg',
                    'font-serif'
                )}
            >
                <div
                    className={clsx(
                        'flex',
                        'flex-col',
                        'w-full h-full',
                        'bg-secondary',
                        'p-4 gap-4',
                        'rounded-md',
                        'font-black',
                        'font-montserrat',
                        'text-primary'
                    )}
                >
                    <div className='flex w-full justify-center'>
                        <Logo className='flex w-full md:w-1/2' />
                    </div>
                    <h1 className='flex font-fleur text-4xl justify-center'>
                        Ingresa
                    </h1>
                    <GreenInput
                        label='Usuario'
                        name='username'
                        state={state}
                        setState={setState}
                    />
                    <GreenInput
                        label='Contraseña'
                        name='password'
                        type='password'
                        state={state}
                        setState={setState}
                    />
                    <Button onClick={signIn}>
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
