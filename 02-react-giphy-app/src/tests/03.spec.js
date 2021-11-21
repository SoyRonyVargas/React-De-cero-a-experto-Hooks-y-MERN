import { AddCategory } from "../components/AddCategory"
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import React from 'react'

describe('Probando el addcategorie', () => {
    
    const setCategories = jest.fn()

    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    
    beforeEach( () => {
        
        jest.clearAllMocks()
        
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
        
    })

    test('Haciendo snapshopt', () => {
        
        expect(wrapper).toMatchSnapshot() 
        
    })

    test('debe de cambiar la caja de texto' , () => {

        const input = wrapper.find('input')

        const value = 'Mariano'

        input.simulate('change' , {
            target: {
                value: value
            }
        })

        const value_paragraph = wrapper.find('p').text().trim()

        expect(value_paragraph).toBe(value)

    })
    
    test('No Deberia enviarse el formulario', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: jest.fn })

        expect(setCategories).not.toHaveBeenCalled()

    })

    test('Debe de llamar el setCategories y limpiar el input', () => {
      
        const value = 'Goku'

        wrapper.find('input').simulate('change', {
            target: {
                value
            }
        })

        let valor_input = wrapper.find('#valor').text().trim()

        expect(valor_input).toBe(value)

        wrapper.find('form').simulate('submit', { preventDefault: jest.fn })

        // ESPERAMOS QUE LA FUNCION SE HAYA LLAMADO
        expect(setCategories).toHaveBeenCalled()
        // ESPERAMOS QUE LA FUNCION SE HAYA LLAMADO UNA VEZ
        expect(setCategories).toHaveBeenCalledTimes(1)
        // ESPERAMOS QUE LA FUNCION SE HAYA EJECUTADO COMO FUNCION
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        valor_input = wrapper.find('#valor').text().trim()

        expect(valor_input).toBe('')
        
    })
    

})
