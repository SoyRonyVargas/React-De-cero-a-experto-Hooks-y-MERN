import CounterApp from '../components/01-useState/counterApp'
import { shallow } from 'enzyme'
import React from 'react'

describe('Montando el proyecto', () => { 

    it("montando el componente" , () => {

        const wrapper = shallow(<CounterApp/>)

        expect(wrapper).toMatchSnapshot()

    })
    
})