// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
	try {
		const resp = await fetch(
			`https://rickandmortyapi.com/api/character`
		)
		const data = await resp.json()

		return data
		// const img = document.createElement('img')
		// img.src = url
		// document.body.append(img)
	} catch (error) {
		// manejo del error
		console.error(error)
		return 'no existe'
	}
}

getImagen()
