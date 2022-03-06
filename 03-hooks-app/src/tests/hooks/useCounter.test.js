import { renderHook , act } from "@testing-library/react-hooks"
import useCounter from '../../hooks/useCounter'
// import '@testing-library/jest-dom'

describe('Probando useCounter', () => { 

    test('Debe retornar 4 valores' , () => {

        const { result } = renderHook( () => useCounter(5) )

        const { counter , reset , increment , decrement } = result.current
    
        expect(counter).toBe(5)
        expect(typeof counter).toBe('number')
        expect(typeof reset).toBe('function')
        expect(typeof increment).toBe('function')
        expect(typeof decrement).toBe('function')
    
    })

    test('Debe tener el counter el 100' , () => {

        const { result } = renderHook( () => useCounter(100) )

        const { counter , reset , increment , decrement } = result.current
        
        expect(counter).toBe(100)
        
    })
    
    test('debe de incrementar el counter en 1', () => {  
        
        const { result } = renderHook( () => useCounter(100) )
        
        const { increment , decrement } = result.current

        act( () => {
            
            increment()
            
            decrement()
        
            decrement()

        })
        
        const { counter } = result.current
        
        expect(counter).toBe(99)
        
    })

    test('Debe de decrementar el counter en 1', () => { 

        const { result } = renderHook( () => useCounter(100) )
        
        const { decrement } = result.current

        act( () => {
            
            decrement()
            
            decrement()

        })
        
        const { counter } = result.current
        
        expect(counter).toBe(98)

    })

})