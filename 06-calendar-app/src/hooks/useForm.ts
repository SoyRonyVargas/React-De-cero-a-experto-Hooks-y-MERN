import { useState , useEffect , useMemo } from 'react';

export const useForm = <T>( initialForm : T , validations : any = {} ) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );
    const [ submited , setSubmited ] = useState<boolean>(false)
    const [ errors , setErrors ] = useState<T>();

    useEffect( () => {

        createValidators()

    }, [formState])
    
    useEffect( () => {

        setFormState(initialForm)

    }, [initialForm])

    const isFormValid = useMemo( () => {

        if( !errors ) return false

        for( let field of Object.keys(errors!) )
        {
            if( errors[field as keyof typeof errors] !== null ) return false
        }

        return true

    } , [errors])

    const onInputChange = ({ target } : React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const errors : any = {}
        
        for( let field of Object.keys(validations) ){

            const [ fn , errorMsg ] = validations[field]

            errors[field] = fn(formState[field as keyof typeof formState]) ? null : errorMsg

        }

        setErrors(errors)

    }

    const handleSubmitForm = () => setSubmited(true)

    return {
        ...formState,
        formState,
        submited,
        onInputChange,
        handleSubmitForm,
        onResetForm,
        isFormValid,
        errors
    }
    
}