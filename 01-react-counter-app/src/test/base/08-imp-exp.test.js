import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import { all_hero } from '../../heroes'

describe('Prueba al 08-imp-exp', () => {
	test('Probando obtener heroe por id', () => {
		const id = 1
		const heroe = getHeroeById(id)
		const heroe_data = all_hero.find(hero => hero.id === id)
		expect(heroe).toEqual(heroe_data)
	})
	test('Probando obtener undefined', () => {
		const id = 10
		const heroe = getHeroeById(id)
		expect(heroe).toBe(undefined)
	})
	test('Debe retornar los heroes de DC', () => {
		const heroesTest = all_hero.filter(h => h.owner === 'DC')
		const heroes = getHeroesByOwner('DC')
		const total = heroes.length
		expect(heroesTest).toEqual(heroes)
		expect(heroesTest.length).toBe(total)
	})
})
