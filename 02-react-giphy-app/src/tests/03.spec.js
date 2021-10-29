import { AddCategory } from "../components/AddCategory"
import { shallow } from "enzyme"
import React from 'react'

describe('Probando el addcategorie', () => {
    
    const setCategories = () => { }

    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    test('Haciendo snapshopt', () => {
        
        expect(wrapper).toMatchSnapshot() 
        
    })

    test('debe de cambiar la caja' , () => {

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
    
})
