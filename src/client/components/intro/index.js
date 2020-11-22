import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import { toHumanReadableDate } from '../../util/datetime'
import { capitalizeText } from '../../util/text'

const Intro = ({ name, colors }) => (
	<>
		{name && (
			<>
				<Text color='primary'>
						Hello, <Text color='secondary'>{capitalizeText(name)}</Text> 👋
				</Text>
				<Text color='primary'>
					Today is <Text color='secondary'>{toHumanReadableDate(new Date())}</Text>
				</Text>
			</>
		)}
	</>
)

Intro.defaultProps = {
	name: 'Stranger',
	colors: {}
}

Intro.propTypes = {
	name: PropTypes.string,
}

export default Intro
