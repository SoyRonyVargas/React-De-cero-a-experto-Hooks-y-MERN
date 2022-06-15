import PropTypes from 'prop-types'
import React from 'react'

const PrimeraApp = ({ saludo, subtitulo }) => {
	return (
		<div data-testid="123">
			<h1>{saludo}</h1>
			<p>{subtitulo}</p>
		</div>
	)
}

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp
