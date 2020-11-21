import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Heading from '../heading'
import Link from '../link'
import LinkItem from '../link-item'

const News = ({ data }) => (
	<>
		{data && data.articles && (
			<>
				<Heading text={`Today's Headlines`} />
				{data.articles.map((article, idx) => (
					<LinkItem
						key={idx}
						title={`- ${article.title}`}
						url={article.url}
					/>
				))}
			</>
		)}
	</>
)

News.defaultProps = {
}


export default News
