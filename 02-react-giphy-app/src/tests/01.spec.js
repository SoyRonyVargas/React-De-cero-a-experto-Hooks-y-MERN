import { GifGridItem } from '../components/GifGridItem'
import { render , screen } from '@testing-library/react'
import React from 'react'

describe('Test a la app gif', () => {
    
    const title = 'Titulo'
    
    const url = 'https://media1.giphy.com/media/l0HlJz7y7zqQkQq9m/giphy.gif'
    
    test('Tomando snapshot del componente', () => {
        
        const { container } = render(<GifGridItem title={title} url={url} />)      

        expect(container).toMatchSnapshot()

    })
    
    test('debe contener la imagen el url', () => {
    
        render(<GifGridItem title={title} url={url} />)      

        // expect(screen.getByRole("img").src).toBe(url)
        
        // expect(screen.getByRole("img").alt).toBe(title)
        
        const { src , alt } = screen.getByRole("img")

        expect(src).toBe(url)
        
        expect(alt).toBe(title)
        
    })
    
    test('Debe de mostrar el titulo en el componente', () => { 

        render(<GifGridItem title={title} url={url} />)      

        expect( screen.getByText(title) ).toBeTruthy()

    })

    // test('Debe obtener la imagen y su url y alt', () => {
        
    //     const img = wrapper.find('img')

    //     const props_img = img.props()

    //     expect(props_img.src).toBe(url)

    //     expect(props_img.alt).toBe(title)

    // })
    
    // test('Deberia tener la clase fade in', () => {
        
    //     const props = wrapper.find('div').props()

    //     const classes = props.className.split(' ')

    //     const has_class = classes.some( className => className == 'animate__fadeIn') 

    //     expect(has_class).toBe(true)

    // })
    

})
