import { GifGrid } from '../components/GifGrid'
import { shallow } from 'enzyme'
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
        
        const wrapper = shallow(<GifGrid category={'goku'} />)

        expect(wrapper).toMatchSnapshot()

    })

    test('Debe de mostrar items cuando se cargan imagenes', () => {
        
        useFetchGifs.mockImplementation( () => {
            return {
                data,
                loading: false
            }
        }) 

        const wrapper = shallow(<GifGrid category={'goku'} />)

        // BUSCAMOS QUE EL PARRAFO DE LOADING NO ESTE MONTADO

        expect(wrapper.find('p').exists()).toBe(false)
        
        // REVISAMOS QUE EL TOTAL DE ITEMS SEA IGUAL AL ARRAY

        expect( wrapper.find('GifGridItem').length ).toBe(data.length)

        expect(wrapper).toMatchSnapshot()

    })
    
    

})
