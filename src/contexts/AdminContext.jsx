import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import { httpMethod, useArmoonia } from '../hooks/useArmoonia'

const AdminContext = createContext()

const initialState = {
    username: undefined,
    password: undefined,
    validated: undefined
}

const AdminProvider = (props) => {

    const [state, setState] = useState(initialState)
    const { query } = useArmoonia()

    const validate = async (username, password) => {
        if (!username || !password) {
            throw new Error('Usuario o contraseña inválida')
        }
        await query('/api/login', {
            method: httpMethod.POST
        })
    }

    const setCredentials = async (username, password) => {
        await validate(username, password)
        setState({
            ...state,
            username,
            password,
            validated: true
        })
    }

    useEffect(() => {
        const setInitialCredentials = async () => {
            try {
                const username = localStorage.getItem('username')
                const password = localStorage.getItem('password')
                await setCredentials(username, password)
            } 
            catch (error) {
                logout()
            }
        }
        setInitialCredentials()
    }, [])

    const login = async (username, password) => {
        try {
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            await setCredentials(username, password)
        }
        catch (error) {
            logout()
            throw error
        }
    }

    const logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        setState(initialState)
    }

    const value = useMemo(() => ({
        ...state,
        login,
        logout
    }), [state])

    return <AdminContext.Provider value={value} {...props} />
}

const useAdmin = () => {
    const context = useContext(AdminContext)
    if (!context) {
        throw new Error('Invalid use of useAdmin, AdminProvider must be defined in parent hierarchy')
    }
    return context
}


export { AdminProvider, useAdmin }
