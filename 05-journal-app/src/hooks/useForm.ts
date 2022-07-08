import { useState , useEffect } from 'react';

export const useForm = <T>( initialForm : T , validations : any = {} ) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );
    const [ errors , setErrors ] = useState<T>();

    useEffect( () => {

        createValidators()

    }, [formState])

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

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        errors
    }
    
}