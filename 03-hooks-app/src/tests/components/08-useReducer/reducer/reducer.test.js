import reducer from "../../../../components/08-useReducer/reducer"
import { demoTodos } from "../../../fixtures"

describe('Probando el reducer', () => { 

    test('deberia retornar el estado inicial', () => { 

        const state = reducer( demoTodos , {})

        expect(state).toEqual(demoTodos)

    })

    test('deberia agregar un nuevo todo', () => { 

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                desc: 'Aprender Angular'
            }
        }

        const state = reducer( demoTodos , action )

        console.log(state);

        expect(state.length).toBe(3)

    })

    test('deberia borrar un TODO', () => { 

        const action = {
            type: 'delete',
            payload: 1
        }

        const state = reducer( demoTodos , action )

        console.log(state);

        expect(state.length).toBe(1)
        
        expect(state).toEqual([demoTodos[0]])

    })

})