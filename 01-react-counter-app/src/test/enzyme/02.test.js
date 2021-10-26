import CounterApp from '../../CounterApp'
import { shallow } from 'enzyme'

describe('Pruebas a la aplicacion de counter', () => {
	let wrapper = shallow(<CounterApp />)
	beforeEach(() => {
		wrapper = shallow(<CounterApp />)
		console.log('beforeEach!!!')
	})
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
	test('Debe incrementar el contador', () => {
		const btn_increment = wrapper.find('button').at(0)
		// const btn_reset = wrapper.find('button').at(1)
		btn_increment.simulate('click')
		const counter_text = wrapper.find('h2').text().trim()
		expect(counter_text).toBe('11')
	})
	test('Debe decrementar el contador', () => {
		const btn_decrement = wrapper.find('button').at(2)
		btn_decrement.simulate('click')
		const counter_text = wrapper.find('h2').text().trim()
		console.log(counter_text)
		expect(counter_text).toBe('9')
	})
	test('Debe resetear el contador', () => {
		const btn_decrement = wrapper.find('button').at(0)
		btn_decrement.simulate('click')
		const btn_reset = wrapper.find('button').at(1)
		btn_reset.simulate('click')
		const counter_text = wrapper.find('h2').text().trim()
		console.log(counter_text)
		expect(counter_text).toBe('10')
	})
})
