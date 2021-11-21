import { GifExpertApp } from '../GifExpertApp'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'

describe('Pruebas al componente GifExpertApp', () => {
    
    let wrapper = shallow(<GifExpertApp/>)

    test('Match con snapshot', () => {

        expect(wrapper).toMatchSnapshot()
        
    })
    
    test('Debe de mostrar 2 hijos ', () => {

        const categories = ['one punch', 'goku']
        
        wrapper = shallow(<GifExpertApp def={categories} />)

        expect(wrapper).toMatchSnapshot()

        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        
    })
    

})
