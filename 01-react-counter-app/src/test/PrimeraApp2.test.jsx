import { render , screen } from '@testing-library/react'
import PrimeraAppApp from '../PrimeraApp'
import "@testing-library/jest-dom"

describe('Primer test con el screen', () => {
	
	const subtitulo = 'esto es un subtitulo prop'
	const saludo = 'Hola Mundo'

	test('deberia mostrarse correctamente', () => {
		
		render(<PrimeraAppApp saludo={saludo} />)

		expect( screen.getByText(saludo) ).toBeTruthy()

	})

	test('Debe de mostrar el subtitulo por props', () => {
		
		render(
			<PrimeraAppApp saludo={saludo} subtitulo={subtitulo} />
		)
		
		expect( screen.getByRole( "heading" , { level : 1 }).innerHTML ).toContain(saludo)
		
	})

})
