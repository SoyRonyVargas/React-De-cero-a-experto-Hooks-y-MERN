import React , { useState  , useEffect } from 'react'
import { TEvent , FormDatePicker } from "../types";
import { differenceInSeconds } from "date-fns";
import useCalendarStore from './useCalendarStore';

const useModal = () => {
 
    const {
        actualEvent,
        startSavingEvent
    } = useCalendarStore()
    
    const [ formState, setFormState ] = useState<TEvent>({
        allDay: false,
        end: new Date(),
        start: new Date(),
        notes: "",
        title: "",
        _id: null
    })
    
    useEffect( () => {

        if( actualEvent !== null )
        {
            setFormState({ ...actualEvent })
        }

    }, [actualEvent])

    const [ errors , setErrors ] = useState<any>({
        start: null,
        notes: null,
        title: null,
        end: null,
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = event.target.name

        setFormState({
            ...formState,
            [name]: event.target.value
        })

    }

    const handleInputDateChange: FormDatePicker = (date, name) => {

        setFormState({
            ...formState,
            [name]: date
        })

    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        const difference = differenceInSeconds( formState.end , formState.start )

        if( isNaN(difference) || difference <= 0 )
        {
            
            setErrors({
                ...errors,
                end: "La fecha es incorrecta"
            })

            return

        }

        startSavingEvent(formState)

    }

    return {
        formState,
        handleSubmitForm,
        handleInputChange,
        handleInputDateChange,
    }
}

export default useModal