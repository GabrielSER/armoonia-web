import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'

const AdminContext = createContext()

const initialState = {
    username: undefined,
    password: undefined,
    validated: undefined
}

const AdminProvider = (props) => {

    const [state, setState] = useState(initialState)

    const validate = async (username, password) => {
        //Validate with backend
        if(!username || !password) {
            return false
        }
        return true
    }

    const setCredentials = async (username, password) => {
        const validated = await validate(username, password)
        setState({
            ...state,
            username,
            password,
            validated
        })
    }

    useEffect(() => {
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('password')
            setCredentials(username, password)
    }, [])

    const login = (username, password) => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        setCredentials(username, password)
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
