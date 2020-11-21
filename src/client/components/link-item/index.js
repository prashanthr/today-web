import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Link from '../link'

const LinkItem = ({ title, url, linkText, colors }) => (
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

export default LinkItem
