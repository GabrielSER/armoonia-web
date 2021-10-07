import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

const initialState = {
    username: '',
    password: ''
}


const Login = () => {

    const [state, setState] = useState(initialState)

    const set = (event) => {
        const { id, value } = event.target
        setState({ ...state, [id]: value })
    }

    const signIn = () => {
        alert(JSON.stringify(state))
    }

    return (
        <div className='flex w-full h-full justify-center items-center'>
            <div>
                <div className='flex gap-4 w-64 md:w-96 bg-white p-0.5 justify-center rounded-md bg-gold shadow-lg font-serif'>
                    <div className='flex flex-col w-full h-full bg-primary p-4 gap-4 rounded-md font-black'>
                        <div className='flex w-full justify-center'>
                            <Logo className='flex w-full md:w-1/2'/>
                        </div>
                        <h1 className='flex font-fleur text-4xl text-secondary justify-center'>
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
