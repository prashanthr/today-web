import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../heading'
import LinkItem from '../link-item'
import { FormControls } from '@universal-apps/swan-react'
import { getValueInRange } from '../../util/range'

const News = ({ data, limit, minLimit, maxLimit, onLimitChange }) => (
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
							onKeyDown={e => {
								if (e.keyCode === 13) {
									e.preventDefault()
								}
							}}
							onChange={e => onLimitChange({ 
								key: 'newsLimit', 
								value: getValueInRange({
									min: minLimit,
									max: maxLimit,
									value: e.target.value
								}) 
							})}
						/>
						<span className='hint-tip'>
							&nbsp;Update to see changes&nbsp;
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
