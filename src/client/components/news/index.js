import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../heading'
import LinkItem from '../link-item'
import { FormControls } from '@universal-apps/swan-react'

const News = ({ data, limit, onLimitChange }) => (
	<>
		{data && data.articles && (
			<>
				<div>
					<Heading text={`Today's Headlines`} />&nbsp;&nbsp;
						<FormControls.NumericInput
							formClassName='today-web-heading-limit-form'
							className='today-web-heading-limit-input'
							id='news-limit' 
							name='news-limit' 
							min='1'
							max='100'
							defaultValue={limit}
							onKeyDown={e => e.preventDefault()}
							onBlur={e => onLimitChange({ key: 'newsLimit', value: e.target.value })}
						/>
						<span className='hint-tip'>
							&nbsp;Update and click outside the box to see changes&nbsp;
						</span>
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
