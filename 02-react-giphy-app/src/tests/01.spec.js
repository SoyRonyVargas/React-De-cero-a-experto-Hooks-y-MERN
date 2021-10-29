import {GifGridItem} from '../components/GifGridItem'
import { shallow } from 'enzyme'
import React from 'react'

describe('Test a la app gif', () => {
    
    const title = 'Titulo'
    
    const url = 'https://media1.giphy.com/media/l0HlJz7y7zqQkQq9m/giphy.gif'
    
    const wrapper = shallow(<GifGridItem title={title} url={url} />)      

    test('Tomando snapshot del componente', () => {
        
        expect(wrapper).toMatchSnapshot()

    })
    
    test('debe tener texto el parrafo', () => {
    
        const valor = wrapper.find('p').text().trim()

        expect(valor).toBe(title)
        
    })
    
    test('Debe obtener la imagen y su url y alt', () => {
        
        const img = wrapper.find('img')

        const props_img = img.props()

        expect(props_img.src).toBe(url)

        expect(props_img.alt).toBe(title)

    })
    
    test('Deberia tener la clase fade in', () => {
        
        const props = wrapper.find('div').props()

        const classes = props.className.split(' ')

        const has_class = classes.some( className => className == 'animate__fadeIn') 

        expect(has_class).toBe(true)

    })
    

})
