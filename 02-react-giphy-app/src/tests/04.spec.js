import { render , screen } from '@testing-library/react'
import { GifGrid } from '../components/GifGrid'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import '@testing-library/jest-dom'

jest.mock('../hooks/useFetchGifs')

describe('Probando el componente GifGrid', () => {

    const data = [
       {
           id: 1,
           title: 'Hello',
           url: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
       }, 
       {
           id: 2,
           title: 'Hello mario',
           url: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
       }, 
       {
           id: 3,
           title: 'Hello mario',
           url: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
       } 
    ]

    test('Deberia generar el snapshot', () => {
        
        useFetchGifs.mockImplementation( () => {
            return {
                data: [],
                loading: true
            }
        }) 
        
        const { container } = render(<GifGrid category={'goku'} />)

        expect(container).toMatchSnapshot()

    })

    test('Debe de mostrar items cuando se cargan imagenes', () => {
        
        useFetchGifs.mockImplementation( () => {
            return {
                data,
                loading: false
            }
        }) 

        const { container } = render(<GifGrid category={'goku'} />)

        // BUSCAMOS QUE EL PARRAFO DE LOADING NO ESTE MONTADO

        const loader = container.querySelector("animate__flash")

        const tot = screen.getAllByRole("img").length

        expect( loader ).toBe( null )

        expect( tot ).toBe(3)
        
    })
    
})
