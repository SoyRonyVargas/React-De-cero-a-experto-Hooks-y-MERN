import { renderHook , waitFor } from '@testing-library/react'
import { useFetchGifs } from "../hooks/useFetchGifs"

describe('Probando el custom hook', () => {
    
    test('Debe de retornar el estado inicial', async () => {

        const category = 'Goku'

        const { result } = renderHook( () =>  useFetchGifs( category ))

        const { data, loading } = result.current

        expect(loading).toBe(true)
        
        expect(data.length).toBe(0)
        
    })

    test('Debe de retornal el estado con datos', async () => {

        const category = 'Goku'

        const { result } = renderHook( () =>  useFetchGifs( category ))

        await waitFor( () => expect(result.current.data.length).toBeGreaterThan(0) )

        const { data:images, loading } = result.current

        expect(loading).toBeFalsy()

        expect(images.length).toBeGreaterThan(0)
        
    })
    

})

