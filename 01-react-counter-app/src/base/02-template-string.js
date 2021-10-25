const nombre = 'Fernando'
const apellido = 'Herrera'

// const nombreCompleto = nombre + ' ' + apellido;
export const nombreCompleto = `${nombre} ${apellido}`

export function getSaludo(nombre = 'Mario 2') {
	return 'Hola ' + nombre
}
