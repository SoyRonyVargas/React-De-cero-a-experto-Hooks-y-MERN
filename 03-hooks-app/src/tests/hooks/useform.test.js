import { renderHook , act } from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm'

describe('Pruebas en el hook useForm', () => { 

    const initialForm = {
        name: 'Mario',
        email: 'marrano@gmail.com'
    }

    test('Debe de retornar el formulario por defecto', () => { 

        const { result } = renderHook( () => useForm())

        const [ values , handleInputChange ] = result.current

        const initalData = {
            name: '',
            email: '',
            password: ''
        }

        expect(values).toEqual(initalData)
        expect(typeof handleInputChange).toBe('function')
        
    })

    test('Debe de cambiar el valor del formulario', () => { 

        const { result } = renderHook( () => useForm())

        const [  , handleInputChange ] = result.current

        const event = {
            target: {
                name: 'name',
                value: 'mario'
            }
        }
        
        act( () => {
            
            handleInputChange(event)   
            
        })
        
        const [ values ] = result.current

        expect(values.name).toEqual('mario')
        
    })

    test('Debe de re-establecer el formulario', () => { 

        const { result } = renderHook( () => useForm())

        const [  , handleInputChange , handleSubmit ] = result.current

        const event = {
            target: {
                name: 'name',
                value: 'mario'
            }
        }
        
        act( () => {
            
            handleInputChange(event)   
            
        })
        
        act( () => {
            
            handleSubmit({
                preventDefault: () => {

                }
            })
            
        })
        
        const [ values ] = result.current

        const initalData = {
            name: '',
            email: '',
            password: ''
        }

        expect(values).toEqual(initalData)
        
    })

})