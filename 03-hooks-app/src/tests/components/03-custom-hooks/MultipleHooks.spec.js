import MultipleHooks from '../../../components/03-custom-hooks/MultipleHooks'
import useCounter from '../../../hooks/useCounter'
import useFetch from '../../../hooks/useFetch'
jest.mock('../../../hooks/useCounter')
jest.mock('../../../hooks/useFetch')
import { shallow } from 'enzyme'
import React from 'react'

describe('Probando el componente multiple custom hooks', () => { 
    
    beforeEach( () => {
        
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {},
        });

    })
    
    test('deberia mostrarse correctamente el componente', () => { 
        

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleHooks/>)

        expect(wrapper).toMatchSnapshot()

    })

    test('debe de mostrar la información', () => { 

        useFetch.mockReturnValue({
            data: [
                {
                    quote: 'test',
                    author: 'Mario palacios'
                }
            ],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleHooks/>)

        expect(wrapper.find('.alert').exists()).toBe(false)
        
        console.log(wrapper.html());

    })
    
})