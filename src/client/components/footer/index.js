import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Link from '../link'
import config from '../../config'
import './index.css'

const author = config.author

const Attribution = ({ sources }) => (
	<Text color='primary'>
		<hr />
		{sources.map(({ type, name, url }, index) => (
			<React.Fragment key={index}>
				<Text className='primary' key={index}>
					{type} from <Link href={url}><Text color='secondary'>{name}</Text></Link>
				</Text>
				{index !== sources.length - 1 && <>,&nbsp;</>}
			</React.Fragment>
		))}
		<br /><br />
		Made with 💙 by <Link href={author.url}>{author.name}</Link> Liked it? <Link href={config.coffeeUrl}>Buy me a coffee</Link>
		<br />
		<hr />
	</Text>
)

Attribution.propTypes = {
	sources: PropTypes.array
}

Attribution.defaultProps = {
	sources: []
}

const Footer = () => (
	<div className='today-web-footer'>
		<Attribution sources={config.attribution.sources} />
	</div>
)

export default Footer
