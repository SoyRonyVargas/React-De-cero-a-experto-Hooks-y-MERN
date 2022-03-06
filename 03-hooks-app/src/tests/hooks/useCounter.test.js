import { renderHook } from "@testing-library/react-hooks"
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

})