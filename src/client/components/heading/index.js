import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'

const Heading = ({ text }) => (
	<Text color={'primary'} bold underline>
		{text}
	</Text>
)

Heading.propTypes = {
	text: PropTypes.string
}

export default Heading
