import { useState , useEffect } from 'react'

const useForm = () => {
    
    const [ values, setValues ] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect( () => {

        console.log('email cambio');

    } , [values.email])

    const handleSubmit = (e) => {

        e.preventDefault()
        
        console.log(values);

    }

    const handleInputChange = ( event ) => {

        const { name , value } = event.target

        setValues({
            ...values,
            [name]: value
        })

    }


    return [ values , handleInputChange , handleSubmit ]

}

export default useForm
