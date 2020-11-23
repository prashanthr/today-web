import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'

const Heading = ({ text }) => (
	<Text color={'secondary'} bold>
		{text}
	</Text>
)

Heading.propTypes = {
	text: PropTypes.string
}

export default Heading
