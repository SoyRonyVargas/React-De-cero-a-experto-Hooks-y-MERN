import { renderHook } from '@testing-library/react-hooks'
import useFetch from '../../hooks/useFetch'

describe('Prueba al hook useFetch', () => { 

    test('Debe retornar objeto vacio', () => { 

        const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`) )

        const { data , loading , error } = result.current

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)

    })

    test('Debe retornar objeto con datos', async () => { 

        const { result , waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`) )

        await waitForNextUpdate({ timeout: 5000 })
        
        const { data , loading , error } = result.current

        expect(data.length).toBe(1)
        
        expect(loading).toBe(false)
        
        expect(error).toBe(null)

    })
    
    test('Debe retornar objeto con error', async () => { 

        const { result , waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/pruebas`) )

        await waitForNextUpdate({ timeout: 5000 })
        
        const { data , loading , error } = result.current

        expect(data).toBe(null)
        
        expect(loading).toBe(false)
        
        expect(error.name).toBe('error')

    })

})