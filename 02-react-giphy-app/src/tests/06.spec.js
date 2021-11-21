import { renderHook , act } from '@testing-library/react-hooks'
import { useFetchGifs } from "../hooks/useFetchGifs"

describe('Probando el custom hook', () => {
    
    test('Debe de retornal el estado inicial', async () => {

        const category = 'Goku'

        const { result , waitForNextUpdate } = renderHook( () =>  useFetchGifs( category ))

        await waitForNextUpdate()

        const { data:images, loading } = result.current

        console.log(images);

        console.log(loading);

        expect(loading).toBe(false)
        
    })

    test('Debe de retornal el estado con datos', async () => {

        const category = 'Goku'

        const { result , waitForNextUpdate } = renderHook( () =>  useFetchGifs( category ))

        await waitForNextUpdate()

        const { data:images, loading } = result.current

        console.log(images);

        console.log(loading);

        expect(loading).toBe(false)
        expect(images.length).toBe(10)
        
    })
    

})

