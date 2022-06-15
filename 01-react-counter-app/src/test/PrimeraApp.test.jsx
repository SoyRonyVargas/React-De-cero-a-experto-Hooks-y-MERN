import { render } from '@testing-library/react'
import PrimeraAppApp from '../PrimeraApp'

describe('Primer test sin screen', () => {
	
	test('deberia mostrarse correctamente', () => {
		
		const saludo = 'Hola Mundo'

		const { container } = render(<PrimeraAppApp saludo={saludo} />)

		const h1 = container.querySelector("h1")

		expect( h1.innerHTML ).toBe(`${saludo}`)

	})

	test('Debe de mostrar el subtitulo por props', () => {
		
		const saludo = 'esto es un titulo prop'
		
		const subtitulo = 'esto es un subtitulo prop'
		
		const { getByText } = render(
			<PrimeraAppApp saludo={saludo} subtitulo={subtitulo} />
		)
		
		expect(getByText(saludo)).toBeTruthy()
		
	})

})
