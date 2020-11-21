import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import './index.css'

const Quote = ({ data, colors }) => (
	<>
		{data && (
			<div>
				<blockquote>
					<p>
						<Text color={'primary'}>
							"{data.quote}" - <Text color={'secondary'}>{data.author}</Text>
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
