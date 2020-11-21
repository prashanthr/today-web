import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Link from '../link'

const LinkItem = ({ title, url, linkText }) => (
	<>
		<Text color='primary'>
			{title}&nbsp;
			<Text color='primary'>
				[
					<Link href={url}>
						<Text color={'secondary'}>{linkText || 'Link'}</Text>
					</Link>
				]
			</Text>
		</Text>
	</>
)

LinkItem.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	linkText: PropTypes.string
}

export default LinkItem
