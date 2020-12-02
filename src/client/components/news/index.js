import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../heading'
import LinkItem from '../link-item'

const News = ({ data, limit, onLimitChange }) => (
	<>
		{data && data.articles && (
			<>
				<div>
					<Heading text={`Today's Headlines`} />&nbsp;&nbsp;
						<input
							className='today-web-heading-limit-input'
							type='number' 
							id='news-limit' 
							name='news-limit' 
							min='1' 
							max='100'
							defaultValue={limit}
							onBlur={e => onLimitChange({ key: 'newsLimit', value: e.target.value })}
						 />
				</div>
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
	data: PropTypes.object
}


export default News
