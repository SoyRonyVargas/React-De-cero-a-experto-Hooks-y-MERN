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

        setState({
            ...state,
            data: data,
            loading: false
        })

    }

    return state
}

export default useFetch
