import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promesas'
import { all_hero } from '../../heroes'

describe('Pruebas 09-promesas', () => {
	test('Debe retornar despues de 2 segundos', done => {
		getHeroeByIdAsync(1).then(heroe => {
			expect(heroe).toEqual(all_hero[0])
			// console.log(heroe)
			done()
		})
	})
	test('Debe retornar un mensaje', done => {
		getHeroeByIdAsync(11).catch(e => {
			expect(e).toBe('No se pudo encontrar el héroe')
			// console.log(e)
			done()
		})
	})
})
