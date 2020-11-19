import React from 'react'
import PropTypes from 'prop-types'
const { Text } = require('ink')

const Heading = ({ text, colors }) => (
	<Text color={colors.primary} bold underline>
		{text}
	</Text>
)

module.exports = Heading
