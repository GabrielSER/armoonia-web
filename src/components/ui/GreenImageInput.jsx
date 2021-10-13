import clsx from 'clsx'
import { useState } from 'react'
import axios from 'axios'
import { BsImage } from 'react-icons/bs'
import ImageInput from './ImageInput'
import {httpMethod} from '../../hooks/useArmoonia'

const GreenImageInput = () => {

    const [url, setUrl] = useState()
    const [photoFile, setPhotoFile] = useState()

    const selectPhoto = ({ value }) => {
        if (!value) {
            return
        }
        const url = URL.createObjectURL(value)
        console.log(url)
        setUrl(url)
        setPhotoFile(value)
    }

    const uploadPhoto = async () => {
        const formData = new FormData()
        formData.append('file', photoFile)
        const response = await axios(`/files/upload`, {
            method: httpMethod.POST,
            data: formData
        })
        return response.url
    }

    return (
        <ImageInput
            className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'aspect-w-16 aspect-h-9',
                'border',
                'border-primary',
                'bg-secondary',
                'hover:opacity-70'
            )}
            onChange={selectPhoto}
        >
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
