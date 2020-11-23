import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import { toHumanReadableDate } from '../../util/datetime'
import { capitalizeText } from '../../util/text'
import { sample } from 'lodash'

const Intro = ({ name }) => (
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
	name: sample(['Stranger', 'Human', 'Earther', 'Earthling', 'Strange Being']),
}

Intro.propTypes = {
	name: PropTypes.string,
}

export default Intro
