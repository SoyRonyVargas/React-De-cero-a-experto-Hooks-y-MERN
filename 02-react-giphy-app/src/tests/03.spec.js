import { render , screen, fireEvent } from '@testing-library/react'
import { AddCategory } from "../components/AddCategory"
import '@testing-library/jest-dom'
import React from 'react'

describe('Probando el <Addcategorie/>', () => {
    
    const setCategories = jest.fn()

    // let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    
    // beforeEach( () => {
        
    //     jest.clearAllMocks()
        
    //     wrapper = shallow(<AddCategory setCategories={setCategories} />)
        
    // })

    test('Haciendo snapshot', () => {
        
        const { container } = render(<AddCategory setCategories={setCategories} />)

        expect(container).toMatchSnapshot() 
        
    })

    test('debe de cambiar la caja de texto' , () => {

        render(<AddCategory setCategories={setCategories} />)

        const input = screen.getByRole("textbox")

        const value = 'Mariano'

        fireEvent.change( input , {
            target: {
                value: value
            }
        })

        // screen.debug()

        expect(input.value).toBe(value)

    })

    test('deberia enviarse el formulario correctamente', () => { 

        const setCategories = jest.fn()

        render(<AddCategory setCategories={setCategories} />)

        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")

        const value = 'Pig'

        fireEvent.change( input , {
            target: {
                value: value
            }
        })  
        
        expect(input.value).toBe(value)

        fireEvent.submit(form)

        expect(setCategories).toHaveBeenCalled()
        
        expect(setCategories).toHaveBeenCalledTimes(1)

        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    })

    test("no deberia agregar el gif" , () => {

        const setCategories = jest.fn()

        render(<AddCategory setCategories={setCategories} />)

        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")

        const value = '  '

        fireEvent.change( input , {
            target: {
                value: value
            }
        })  
        
        expect(input.value).toBe(value)

        fireEvent.submit(form)

        expect(setCategories).not.toHaveBeenCalled()
        
        expect(setCategories).toHaveBeenCalledTimes(0)

        screen.debug()

    })

    // test('debe de cambiar la caja de texto' , () => {

    //     const input = wrapper.find('input')

    //     const value = 'Mariano'

    //     input.simulate('change' , {
    //         target: {
    //             value: value
    //         }
    //     })

    //     const value_paragraph = wrapper.find('p').text().trim()

    //     expect(value_paragraph).toBe(value)

    // })
    
    // test('No Deberia enviarse el formulario', () => {
        
    //     wrapper.find('form').simulate('submit', { preventDefault: jest.fn })

    //     expect(setCategories).not.toHaveBeenCalled()

    // })

    // test('Debe de llamar el setCategories y limpiar el input', () => {
      
    //     const value = 'Goku'

    //     wrapper.find('input').simulate('change', {
    //         target: {
    //             value
    //         }
    //     })

    //     let valor_input = wrapper.find('#valor').text().trim()

    //     expect(valor_input).toBe(value)

    //     wrapper.find('form').simulate('submit', { preventDefault: jest.fn })

    //     // ESPERAMOS QUE LA FUNCION SE HAYA LLAMADO
    //     expect(setCategories).toHaveBeenCalled()
    //     // ESPERAMOS QUE LA FUNCION SE HAYA LLAMADO UNA VEZ
    //     expect(setCategories).toHaveBeenCalledTimes(1)
    //     // ESPERAMOS QUE LA FUNCION SE HAYA EJECUTADO COMO FUNCION
    //     expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    //     valor_input = wrapper.find('#valor').text().trim()

    //     expect(valor_input).toBe('')
        
    // })
    

})
