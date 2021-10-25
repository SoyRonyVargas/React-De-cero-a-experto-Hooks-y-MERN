import { getImagen } from '../../base/11-async-await'

describe('Probando async await 11', () => {
	test('Probando', async done => {
		const characters = await getImagen()
		console.log(characters)
		expect(typeof characters).toBe('object')
		done()
		// expect(characters).toBe('')
	})
})
