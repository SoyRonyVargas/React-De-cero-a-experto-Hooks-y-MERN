import CounterApp from '../../CounterApp'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
describe('Pruebas a la aplicacion de counter', () => {
	test('Deberia crearse el snapshot', () => {
		const wrapper = shallow(<CounterApp />)
		expect(wrapper).toMatchSnapshot()
	})
	test('Deberia TENER 100', () => {
		const valor = 100
		const wrapper = shallow(<CounterApp value={valor} />)
		const valor_h2 = wrapper.find('h2').text()
		expect(parseInt(valor_h2)).toBe(valor)
	})
})
