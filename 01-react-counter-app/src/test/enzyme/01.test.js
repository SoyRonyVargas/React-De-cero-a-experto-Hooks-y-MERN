import { shallow } from 'enzyme'
import PrimeraAppApp from '../../PrimeraApp'

describe('Primer test', () => {
	test('should', () => {
		const saludo = 'Hola xdxd'

		const wrapper = shallow(<PrimeraAppApp saludo={saludo} />)

		expect(wrapper).toMatchSnapshot()
	})
	test('Debe de mostrar el subtitulo por props', () => {
		const saludo = 'esto es un titulo prop'
		const subtitulo = 'esto es un subtitulo prop'
		const wrapper = shallow(
			<PrimeraAppApp saludo={saludo} subtitulo={subtitulo} />
		)
		const textoParrafo = wrapper.find('p').text()

		console.log(textoParrafo)

		expect(textoParrafo).toBe(subtitulo)
		// expr
		// console.log(textoParrafo)
		// expect(textoParrafo)
	})
})
