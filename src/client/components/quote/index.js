import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Heading from '../heading'
import './index.css'

const Quote = ({ data, colors }) => (
	<>
		{data && (
			<div>
				<Heading text='Quote of the day' />
				<blockquote>
					<p>
						<Text color={'primary'}>
							"{data.quote}" - <Text color={'tertiary'}>{data.author}</Text>
						</Text>
					</p>
				</blockquote>
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
