import { render , screen , fireEvent } from '@testing-library/react'
import CounterApp from '../CounterApp'

describe('Pruebas a la aplicacion de <CounterApp/>', () => {
	
	// beforeEach(() => {
	// 	wrapper = shallow(<CounterApp />)
	// 	console.log('beforeEach!!!')
	// })
	
	test('Deberia crearse el snapshot', () => {
		
		render(<CounterApp />)
		
		expect(screen).toMatchSnapshot()

	})

	test('Deberia TENER 100', () => {
		
		const valor = "100"
		
		const { container } = render(<CounterApp value={valor} />)
		
		expect( container.querySelector("h2").innerHTML.trim() ).toContain(valor)

	})

	test('Debe incrementar el contador', () => {
		
		const valor = 10
		
		const { container } = render(<CounterApp value={valor} />)

		fireEvent.click( screen.getByText("+1") )

		expect( container.querySelector("h2").innerHTML ).toContain("11")

		screen.debug()

	})
	
	test('Debe decrementar el contador', () => {
		
		const valor = 10
		
		const { container } = render(<CounterApp value={valor} />)

		fireEvent.click( screen.getByText("-1") )

		expect( container.querySelector("h2").innerHTML ).toContain("9")

	})

	test('Debe resetear el contador', () => {
		
		const valor = 10
		
		const { container } = render(<CounterApp value={valor} />)

		fireEvent.click( screen.getByText("-1") )
		
		fireEvent.click( screen.getByText("Reset") )

		expect( container.querySelector("h2").innerHTML.trim() ).toContain("10")


	})

})
