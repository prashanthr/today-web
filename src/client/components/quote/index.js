import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'

const Quote = ({ data, colors }) => (
	<>
		{data && (
			<div>
				<Text color={'primary'}>
					"{data.quote}" - <Text color={'secondary'}>{data.author}</Text>
				</Text>
			</div>
		)}
	</>
)

Quote.propTypes = {
	data: PropTypes.shape({
		quote: PropTypes.string,
		author: PropTypes.string
	})
}


export default Quote
