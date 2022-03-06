import { useEffect, useState } from 'react'

const useFetch = (url) => {
    
    const [ state , setState ] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        
        getData()

        return () => {

        }

    }, [url])

    const getData = async () => {

        setState({
            ...state,
            loading: true
        })

        const response = await fetch(url)

        const data = await response.json()

        setTimeout( () => {
            setState({
                ...state,
                data: data,
                loading: false
            })
        }, 0)

    }

    return state
}

export default useFetch
