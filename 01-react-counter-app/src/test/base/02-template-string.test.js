import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas al 02-strings', () => {
	test('Prueba al archivo getSaludo, debe retornar Hola Mario', () => {
		const name = 'Mario'
		const saludo = getSaludo(name)
		// console.log(saludo)
		expect(saludo).toBe(`Hola ${name}`)
	})
	test('debe retornar mario2 ', () => {
		const name = 'Mario 2'
		const saludo = getSaludo()
		// console.log(saludo)
		expect(saludo).toBe(`Hola ${name}`)
	})
})
