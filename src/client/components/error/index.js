import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import './index.css'

const Error = ({ message }) => (
	<Text	
		className='today-web-error-text'
	>
		{message}
	</Text>
)

Error.propTypes = {
	message: PropTypes.string
}


export default Error
