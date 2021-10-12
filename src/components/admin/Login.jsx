import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { useAdmin } from '../../contexts/AdminContext'

const initialState = {
    username: '',
    password: ''
}

const Login = () => {

    const { login } = useAdmin()
    const [state, setState] = useState(initialState)

    const set = (event) => {
        const { id, value } = event.target
        setState({ ...state, [id]: value })
    }

    const signIn = () => {
        login(state.username, state.password)
    }

    return (
        <div className='flex w-full h-full justify-center items-center bg-gradient-to-br from-primary/70 to-secondary'>
            <div>
                <div className='flex gap-4 w-64 md:w-96 bg-primary p-0.5 justify-center rounded-md bg-gold shadow-lg font-serif'>
                    <div className='flex flex-col w-full h-full bg-secondary p-4 gap-4 rounded-md font-black font-montserrat text-primary'>
                        <div className='flex w-full justify-center'>
                            <Logo className='flex w-full md:w-1/2' />
                        </div>
                        <h1 className='flex font-fleur text-4xl justify-center'>
                            Ingresa
                        </h1>
                        <label className='font-montserrat'>
                            Usuario
                        </label>
                        <Input
                            id='username'
                            value={state.username}
                            onChange={set}
                        />
                        <label className='font-montserrat'>
                            Contraseña
                        </label>
                        <Input
                            id='password'
                            type='password'
                            value={state.password}
                            onChange={set}
                        />
                        <Button onClick={signIn}>
                            Log in
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
