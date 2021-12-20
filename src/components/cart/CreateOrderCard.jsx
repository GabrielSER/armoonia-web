import React, { useEffect, useState } from 'react'
import Card from '../products/Card'
import Button from '../ui/Button'
import GreenInput from '../ui/GreenInput'
import { FaShippingFast } from 'react-icons/fa'
import { useCart } from '../../contexts/CartContext'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegex = /^(\+57)?[0-9]{10}$/

const validateName = (name) => {
    if (!name) {
        throw new Error('El nombre es requerido')
    }
}

const validateEmail = (email) => {
    if (!email) {
        throw new Error('El correo es requerido')
    }
    if (!String(email).toLowerCase().match(emailRegex)) {
        throw new Error('Ingresa un correo válido')
    }
}

const validatePhone = (phone) => {
    if (!phone) {
        throw new Error('El teléfono es requerido')
    }
    if (!String(phone).toLowerCase().match(phoneRegex)) {
        throw new Error('Ingresa un número de teléfono válido para Colombia')
    }
}

const validateCity = (city) => {
    if (!city) {
        throw new Error('La ciudad es requerida')
    }
}

const validateAddress = (address) => {
    if (!address) {
        throw new Error('La dirección es requerida')
    }
}

const initialState = {
    name: '',
    email: '',
    phone: '',
    city: '',
    address: ''
}

const CreateOrderCard = () => {

    const [state, setState] = useState(initialState)
    const [error, setError] = useState()
    const { createOrderWithCart } = useCart()

    useEffect(() => {
        if (!error) {
            return
        }
        const timeOutId = setTimeout(() => {
            setError(undefined)
        }, error.length * 150)
        return () => clearTimeout(timeOutId)
    }, [error])

    const validateData = () => {
        const {
            name,
            email,
            phone,
            city,
            address
        } = state
        validateName(name)
        validateEmail(email)
        validatePhone(phone)
        validateCity(city)
        validateAddress(address)
        setError(undefined)
    }

    const createOrder = async () => {
        try {
            validateData()
            const response = await createOrderWithCart(state)
            console.log(response)
        }
        catch (error) {
            setError(error.message)
        }
    }

    return (
        <Card className='flex-col p-4 gap-2'>
            <label className='font-bold font-montserrat text-primary text-2xl'>
                Ingresa los datos de contacto
            </label>
            <div className='flex flex-col md:flex-row w-full gap-2'>
                <div className='flex flex-col md:w-1/2 gap-2'>
                    <GreenInput
                        label='Nombre'
                        name='name'
                        state={state}
                        setState={setState}
                        onValidate={validateName}
                        required
                    />
                    <GreenInput
                        label='Correo eletrónico'
                        name='email'
                        state={state}
                        setState={setState}
                        onValidate={validateEmail}
                        required
                    />
                </div>
                <div className='flex flex-col md:w-1/2 gap-2'>
                    <GreenInput
                        label='Teléfono (WhatsApp)'
                        name='phone'
                        state={state}
                        setState={setState}
                        onValidate={validatePhone}
                        required
                    />
                    <GreenInput
                        label='Ciudad'
                        name='city'
                        state={state}
                        setState={setState}
                        onValidate={validateCity}
                        required
                    />
                </div>
            </div>
            <GreenInput
                label='Dirección'
                name='address'
                state={state}
                setState={setState}
                onValidate={validateAddress}
                required
            />
            {
                error &&
                <p className='bg-red-200 border border-red-600 text-red-700 justify-center items-center text-center rounded-md p-2'>
                    {error}
                </p>
            }
            <Button
                className='flex items-center justify-center gap-2 rounded-l-full rounded-r-full px-4'
                onClick={createOrder}
            >
                <FaShippingFast />
                <span>
                    Crear orden
                </span>
            </Button>
        </Card>
    )
}

export default CreateOrderCard
