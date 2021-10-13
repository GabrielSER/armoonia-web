import axios from 'axios'
import base64 from 'base-64'
import { useState, useCallback } from 'react'
import { useAdmin } from '../contexts/AdminContext'

import packageJson from '../../package.json'

const apiUrl = packageJson.proxy

const httpMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const useArmoonia = () => {

    const {username, password, validated} = useAdmin()
    const [loading, setLoading] = useState(false)

    const query = useCallback(async (route, options) => {
        const fetchOptions = {
            baseURL: apiUrl,
            url: route,
            method: options?.method ?? httpMethod.GET
        }
        if (options?.body) {
            fetchOptions.data = options.body
        }
        fetchOptions.headers = {
            'Access-Control-Allow-Origin': '*'
        }
        if (options?.headers) {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                ...options.headers
            }
        }
        if (validated) {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                'Authorization': 'Basic ' + base64.encode(username + ':' + password)
            }
        }
        setLoading(true)
        try {
            const rawResponse = await axios(fetchOptions)
            let body = rawResponse.data
            if (typeof body !== 'object' && !Array.isArray(body)) {
                body = { message: body }
            }
            return body
        }
        catch (error) {
            console.error(error)
            const response = error?.response?.data
            throw new Error(response?.message ?? response?.error ?? 'Unknown error')
        }
        finally {
            setLoading(false)
        }
    }, [validated, username, password])

    return {query, loading}
}

export { useArmoonia, httpMethod }