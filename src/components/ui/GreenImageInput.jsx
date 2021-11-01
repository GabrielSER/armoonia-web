import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import ImageInput from './ImageInput'
import { httpMethod, useArmoonia } from '../../hooks/useArmoonia'

const GreenImageInput = (props) => {

    const {
        name,
        value,
        onChange,
        state,
        setState,
        changeLoading
    } = props

    const { query, loading } = useArmoonia()
    const [url, setUrl] = useState(value ?? state?.[name])

    useEffect(() => {
     changeLoading?.(loading)
    }, [loading])

    const selectPhoto = useCallback(async ({ value, event }) => {
        if (!value) {
            return
        }
        const temporalUrl = URL.createObjectURL(value)
        setUrl(temporalUrl)
        const url = await uploadPhoto(value)
        if (onChange) {
            const change = { value: url, event }
            if (name) {
                change.name = name
            }
            onChange(change)
        }
        setState?.({ ...state, [name]: url })
    }, [name, onChange, state, setState])

    const uploadPhoto = async (photoFile) => {
        const formData = new FormData()
        formData.append('file', photoFile)
        const response = await query(`/api/files/upload`, {
            method: httpMethod.POST,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        return response.url
    }

    return (
        <ImageInput
            className={clsx(
                'flex',
                'relative',
                'justify-center',
                'items-center',
                'w-full',
                'aspect-w-16 aspect-h-9',
                'border',
                'border-primary',
                'bg-secondary',
                'hover:opacity-70'
            )}
            onChange={selectPhoto}
        >
            {
                 loading && 
                <div className='absolute flex z-20 w-full h-full justify-center items-center bg-shadow'>
                    <AiOutlineLoading3Quarters className='animate-spin text-4xl text-white'/>
                </div>
            }
            {
                url &&
                <img className='w-full h-full object-cover' src={url} />
            }
            {
                !url && <BsImage className='text-4xl' />
            }
        </ImageInput>
    )
}

export default GreenImageInput
