import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas al 05-funciones', () => {
	test('Prueba al getUser debe retornar objeto', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		}
		const user = getUser()
		expect(user).toStrictEqual(userTest)
	})
	test('Prueba al getUsuarioActivo', () => {
		const tstUser = {
			uid: 'ABC567',
			username: 'mario',
		}
		const user = getUsuarioActivo('mario')
		expect(user).toStrictEqual(tstUser)
	})
})
