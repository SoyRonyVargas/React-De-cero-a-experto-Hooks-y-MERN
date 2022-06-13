import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState<any>( initialForm );

    const onInputChange = ( event : React.ChangeEvent<HTMLInputElement> ) => {
        
        const { target } = event

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}